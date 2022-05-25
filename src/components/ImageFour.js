import { Parallax } from 'react-parallax';
import PicFour from '../img/picFour.jpg'

const ImageFour = () => (
    <Parallax className='image'  bgImage={PicFour} strength={800}>
        <div className="content">
            <span className="img-txt">This is PicOne...</span>
        </div>
    </Parallax>
);

export default ImageFour;