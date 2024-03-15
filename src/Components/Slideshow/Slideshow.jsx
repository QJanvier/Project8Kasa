import { useState } from 'react';
import ForwardArrow from  '../../Assets/image/arrow/arrow_forward';
import BackwardArrow from '../../Assets/image/arrow/arrow_back';
import PropTypes from 'prop-types';

const Slideshow = ({ pictures, title }) => {
    const pictureLength = pictures.length;
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
    const pictureCounter = `${currentPictureIndex + 1} / ${pictureLength}`;

    const previousPicture = () => {
        const previousIndex = currentPictureIndex -1;
        setCurrentPictureIndex(previousIndex < 0 ? pictureLength - 1 : previousIndex);
    };

    const nextPicture = () => {
        if (currentPictureIndex === pictureLength - 1) {//If last picture
            let currentIndex = currentPictureIndex
            const interval = setInterval(() => {
                currentIndex = currentIndex === 0 ? pictureLength - 1 : currentIndex - 1;
                setCurrentPictureIndex(currentIndex);
                if (currentIndex === 0) {//Stop scrolling if first image
                    clearInterval(interval);
                }
            }, 50);
        } else {//next image
            setCurrentPictureIndex(currentPictureIndex + 1);
        }
    }

    const currentPicture = pictures[currentPictureIndex];
    if (pictureLength === 1) {
        return (
            <section className="slideshow"><img src={currentPicture} alt={title} className='single_pic_slide'/></section>
        );
    }

    return (
        <section className="slideshow">
            <img src={currentPicture} alt={title} className='slideshowPicture'/>
            <img src={BackwardArrow} alt="Left Arrow" onClick={previousPicture} className='slideshowArrow slideshowLeftArrow'/>
            <img src={ForwardArrow} alt='Right Arrow' onClick={nextPicture} className='slideshowArrow slideshowRightArrow'/>
            <div className="slideshowCounter"> {pictureCounter}</div>
        </section>
    );
}

export default Slideshow;

Slideshow.propTypes = {
    title: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};