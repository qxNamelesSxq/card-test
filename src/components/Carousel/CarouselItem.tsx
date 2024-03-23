import { Carousel } from "react-bootstrap"
import { ICarouselImageProps, PositionList } from "./CarouselItem.type"
import styles from "./CarouselItem.module.scss"
import { ImageComponent } from "../Image/Image"

export const CarouselItemComponent: React.FC<ICarouselImageProps> = ({subTitle, title, position, urlImage}) => {

    const positionStyles = (position: PositionList) => {
        switch (position) {
            case PositionList.TOP:
                return 'top-0'
            case PositionList.CENTER:
                return 'top-50 translate-middle-y'
            case PositionList.BOTTOM:
                return 'bottom-0'
            default:
                return '';
        }
    }
    return(
        <div className="">
            <ImageComponent url={urlImage} />
                <Carousel.Caption className={`my-5 d-flex flex-column ${positionStyles(position)} ${styles.carouselCapture}`}>
                        <h6>{subTitle}</h6>
                        <h2>{title}</h2>
                        <div className={`w-50 mx-auto`} />
                </Carousel.Caption>
        </div>
    )
}