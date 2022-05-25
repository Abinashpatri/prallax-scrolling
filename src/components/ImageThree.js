import { Parallax } from 'react-parallax';
import PicThree from '../img/picThree.jpg'

const ImageThree = () => (
    <Parallax className='image'  bgImage={PicThree} strength={800}>
        <div className="content">
            <span className="img-txt">This is PicOne...</span>
        </div>
    </Parallax>
);

export default ImageThree;