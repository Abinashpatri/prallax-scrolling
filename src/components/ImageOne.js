import { Parallax } from 'react-parallax';
import PicOne from '../img/picOne.jpg'

const ImageOne = () => (
    <Parallax className='image'  bgImage={PicOne} strength={100}>
        <div className="content">
            <span className="img-txt">This is PicOne_____UPDATED_____...</span>
        </div>
    </Parallax>
);

export default ImageOne;