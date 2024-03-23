export interface ICarouselImageProps {
    subTitle: string,
    title: string,
    position: PositionList,
    urlImage: string,
}

export enum PositionList {
    TOP = 'top',
    LEFT = 'left',
    RIGHT = 'right',
    BOTTOM = 'bottom',
    CENTER = 'center',
}