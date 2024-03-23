import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"

import { useCardContext } from "context/index";
import { ModalComponent, CardsList, ICard } from "components/index";
import { INewCard, TypeCard } from "types/index";
import { ActivityService } from "services/index";

import styles from "./MyCardsBlock.module.scss";
import 'global.scss';

const defaultState = {title: '', description: ''}

export const MyCardsBlock = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [card, setCard] = useState<INewCard | ICard>(defaultState)
    
    const {cardList, addNewCard, deleteCard, updateCard} = useCardContext()

    const handleOpenModal = (type: TypeCard, cardCurrent?: ICard) => {
        if(type === TypeCard.NEW_CARD) {
            ActivityService.getRandomActivity()
            .then((data) => {
                data && setCard({...card, title: data.activity})
                setIsOpenModal(true)
            })
            .catch((error) => {
                console.error(error)
            })
        }

        if(type === TypeCard.EDIT_CARD && cardCurrent) {
            setCard(cardCurrent)
            setIsOpenModal(true)
        }

        if(type === TypeCard.DELETE_CARD && cardCurrent) {
            deleteCard(cardCurrent.id)
        }

    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
        setCard(defaultState)
    }

    const handleSubmitModal = (card: INewCard | ICard) => {
        if('id' in card) {
            updateCard(card)
        } else {
            addNewCard(card)
        }
        setCard(defaultState)
    }

    return(
        <Col>
            <Row className="gap-5">
                <Col className={`d-flex flex-column justify-content-center align-items-end w-75`}>
                    <h2 className={`${styles.header3}`}>B&O Plan —</h2>
                    <p>User Experience, User Interface</p>   
                </Col> 
                <Col className={`bigNumber d-flex justify-content-start align-items-center`}>02</Col> 
            </Row>
        <div className={`${styles.containerBlock}`}>
            <Container>
                <Row>
                    <h1>My Cards</h1>
                </Row>
                <Row>
                    <CardsList cards={cardList} openModalCallback={handleOpenModal} />
                </Row>
                <ModalComponent 
                    isOpen={isOpenModal} 
                    openModalCallback={handleCloseModal}
                    handleCloseModal={handleCloseModal}
                    submitModalCallback={handleSubmitModal}
                    card={card}
                />
            </Container>
        </div>
        </Col>
    )
}