import { ModalCard } from "types";

export interface ICard {
    id: string,
    title: string,
    description: string,
}

export interface ICardProps {
    card?: ICard,
    openModalCallback: ModalCard,
}
