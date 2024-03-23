import { Image } from 'react-bootstrap';
import { IImageProps } from "./Image.type";


export const ImageComponent: React.FC<IImageProps> = ({url, variant = "fluid"}) => {

    const variantProps = {
        fluid: variant === 'fluid',
        rounded: variant === 'rounded',
        roundedCircle: variant === 'roundedCircle',
        thumbnail: variant === 'thumbnail'
      };

    return(
        <div className='vh-100'>
            <Image className='h-100 w-100' src={url} {...variantProps} />
        </div>
    )
}