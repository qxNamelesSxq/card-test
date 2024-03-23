import { ModalCard } from "types";
import { ICard } from "../Card/CardComponent.type";

export type ICardList = ICard[]

export interface ICardListProps {
    cards: ICard[] | null,
    openModalCallback: ModalCard,
}