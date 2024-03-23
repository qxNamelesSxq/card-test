import { createContext, useContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ICard, ICardList } from "components/index";
import { ICardContextState, INewCard } from "types/index";
import { IndexDbUtils } from "services";
import settings from "../settings.json";


export const CardContext = createContext<ICardContextState>({
	addNewCard: () => {},
	deleteCard: () => {},
	updateCard: () => {},
	cardList: null,
});


export const CardContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
	const [cardList, setCardList] = useState<ICardList | null>(null);
		
	const DBRef = useRef<IDBDatabase | null>(null);
	const {localDB} = settings;

	useEffect(() => {
		async function connectToDB() {
			DBRef.current = await IndexDbUtils.getDBConnection(localDB.nameDB, localDB.nameCollection);
		}
		connectToDB()
		.then(async () => {
			if(DBRef.current) {
				const cardList = await IndexDbUtils.getAllFromStore(DBRef.current, localDB.nameCollection);
				cardList && cardList.length > 0 && setCardList(cardList as ICard[])
			}
		});

		return () => {
            if (DBRef.current) {
                DBRef.current.close();
                DBRef.current = null;
            }
        };
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	const addNewCard = async({title, description}: INewCard) => {
		const newCard = {
			id: uuidv4(),	
			title,
			description
		}
		const newState = cardList ? [...cardList, newCard] : [newCard]
		setCardList(newState)
		try {
			DBRef.current && await IndexDbUtils.createUpdateEntry(
				DBRef.current,
				localDB.nameCollection,
				newCard,
			)
		} catch (error) {
			console.error('Connection failed:', error)
		}
	}

	const updateCard = async(card: ICard) => {
		if(cardList &&	cardList.length > 0) {
			const newState = cardList.map(c => c.id === card.id ? card : c)
			
			setCardList(newState)
			try {
				DBRef.current && await IndexDbUtils.createUpdateEntry(
					DBRef.current,
					localDB.nameCollection,
					card,
				)
			} catch (error) {
				console.error('Updating failed:', error)
			}
		}
	}

	const deleteCard = async(id: string) => {
		if (cardList) {
			const newState = cardList.filter(c => c.id !== id)
			setCardList(newState)

			try {
				DBRef.current && await IndexDbUtils.deleteEntry(
					DBRef.current,
					localDB.nameCollection,
					id,
				)
			} catch (error) {
				console.error('Deleting error:', error)
			}
		}
	}


	return (
		<CardContext.Provider
		value={{
				addNewCard,
				deleteCard,
				updateCard,
				cardList,
		}}
		>
		{children}
		</CardContext.Provider>
	);
};

export const useCardContext = () => useContext(CardContext);
