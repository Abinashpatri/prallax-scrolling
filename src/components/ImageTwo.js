import { Parallax } from 'react-parallax';
import PicTwo from '../img/picTwo.jpg'

const ImageTwo = () => (
    <Parallax className='image'  bgImage={PicTwo} strength={800}>
        <div className="content">
            <span className="img-txt">This is PicOne...</span>
        </div>
    </Parallax>
);

export default ImageTwo;