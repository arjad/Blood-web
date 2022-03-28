import AliceCarousel from 'react-alice-carousel';
import image1 from '../../../assets/about-wall.jpg';
import image2 from '../../../assets/sliders.jpg';
import image3 from '../../../assets/about-wall.jpg';
import image4 from '../../../assets/about-wall.jpg';

export default function Team ()
{
    return(
        <>
        <h1 className='text-center'>OUR TEAM </h1>
        <br/>
        <AliceCarousel className="container-fluid" data-aos="flip-left" data-aos-delay="200" autoPlay autoPlayInterval="1000">
          <div><img src={image1} className="sliderimg" alt=""/></div>
          <div><img src={image2} className="sliderimg" alt=""/></div>
          <div><img src={image3} className="sliderimg" alt=""/></div>
          <div><img src={image4} className="sliderimg" alt=""/></div>
        </AliceCarousel> 
        </>
    )
}