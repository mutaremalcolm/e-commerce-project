import Carousel_1 from '../../assets/Carousel_Images/Carousel_1.jpg';
import Carousel_2 from '../../assets/Carousel_Images/Carousel_2.jpg';
import Carousel_3 from '../../assets/Carousel_Images/Carousel_3.jpg';
import Carousel_4 from '../../assets/Carousel_Images/Carousel_4.jpg';

export const images = [Carousel_1, Carousel_2, Carousel_3, Carousel_4];

function imageByIndex(index) {
  return images[index % images.length];
}

export default imageByIndex;