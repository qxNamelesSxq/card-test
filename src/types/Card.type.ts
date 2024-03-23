import { ICard, ICardList } from "components/index";

export interface ICardContextState {
    addNewCard: ({title, description}: INewCard) => void,
    deleteCard: (id: string) => void,
    updateCard: (card: ICard) => void,
    cardList: ICardList | null,
}   

export interface INewCard {
    title: string,
    description: string,
}

export enum TypeCard {
    NEW_CARD = 'NEW_CARD',
    EDIT_CARD = 'EDIT_CARD',
    DELETE_CARD = 'DELETE_CARD',
}

export type ModalCard = (type: TypeCard, card?: ICard) => void