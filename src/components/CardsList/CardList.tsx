import { CardComponent } from "components"
import { ICardListProps } from "./CardList.type"

export const CardsList: React.FC<ICardListProps> = ({cards, openModalCallback}) => {

    return(
        <div className="d-flex flex-wrap justify-content-evenly">
            {cards && cards.length > 0 ?
                cards.map(c => <CardComponent card={c} openModalCallback={openModalCallback} key={c.id} />) : null
            }
            <CardComponent openModalCallback={openModalCallback} />
        </div>
    )
}