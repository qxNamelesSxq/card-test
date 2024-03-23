import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './CardComponent.module.scss';
import { PlusIcon } from '@heroicons/react/24/solid'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { ICardProps } from './CardComponent.type';
import { Button } from 'react-bootstrap';
import { TypeCard } from 'types';

export const CardComponent: React.FC<ICardProps> = ({card, openModalCallback}) => {


  return (
    <Card className={`${styles.card} ${!card && styles.cardAdd} m-3 p-2 position-relative`}>
      <Card.Body>
        { card ? 
          <>
            <Card.Title className={`${styles.titleCard} mb-4`}>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
            <Button className={`${styles.editButton} position-absolute top-0 end-0`}
              onClick={() => openModalCallback(TypeCard.EDIT_CARD, card)}
            >
              <PencilSquareIcon className={`${styles.icon}`} />
            </Button>
            <Button className={`${styles.editButton} position-absolute bottom-0 end-0`}
              onClick={() => openModalCallback(TypeCard.DELETE_CARD, card)}
            >
              <TrashIcon className={`${styles.icon}`} />
            </Button>
          </> :
          <div className={`${styles.iconBody} d-flex justify-content-center align-items-center w-100 h-100`}
            onClick={() => openModalCallback(TypeCard.NEW_CARD)} >
            <PlusIcon className='w-75 h-75' />
          </div>
        }
        </Card.Body>
    </Card>
  );
}