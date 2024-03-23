import { Carousel } from 'react-bootstrap';
import { PositionList } from './CarouselItem.type';
import { CarouselItemComponent } from './CarouselItem';
import styles from "./CarouselItem.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';


export const CarouselComponent = () => {
  return (
    <Carousel className={`h-75 ${styles.carousel}`}>
      <Carousel.Item>
        <CarouselItemComponent
            subTitle="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
            title='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur...'
            position={PositionList.TOP}
            urlImage="/images/header.png"
            />
      </Carousel.Item>
      <Carousel.Item>
      <CarouselItemComponent
            subTitle="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
            title='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur...'
            position={PositionList.CENTER}
            urlImage="/images/header.png"
            />
      </Carousel.Item>
      <Carousel.Item>
      <CarouselItemComponent
            subTitle="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
            title='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur...'
            position={PositionList.BOTTOM}
            urlImage="/images/header.png"
            />
      </Carousel.Item>
    </Carousel>
  );
}