import { ICard } from "components/index";
import { INewCard } from "types/index";

export interface IModalProps {
    isOpen?: boolean,
    openModalCallback: () => void,
    handleCloseModal: () => void,
    submitModalCallback: (newCard: INewCard) => void,
    card: ICard | INewCard,
}

export type NewCardState = INewCard