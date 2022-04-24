import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../assets/about-wall.jpg';
import image2 from '../../../assets/sliders.jpg';
import image3 from '../../../assets/about-wall.jpg';
import image4 from '../../../assets/about-wall.jpg';

export default function Team ()
{
    return(
      <>
        <h1 className='text-center'>OUR GALLERY </h1>
        <br/>
        
        <Carousel className="sliders">
                <div className="d1">
                    <img src={image1}/>
                    <p className="legend">First Meeting</p>
                </div>
                <div className="d1">
                    <img src={image2}/>
                    <p className="legend">FInal Seminar</p>
                </div>
                <div className="d1">
                    <img src={image3} />
                    <p className="legend">Donor Camp</p>
                </div>
                <div className="d1">
                    <img src={image1}/>
                    <p className="legend">First Meeting</p>
                </div>
                <div className="d1">
                    <img src={image2}/>
                    <p className="legend">FInal Seminar</p>
                </div>
                <div className="d1">
                    <img src={image3} />
                    <p className="legend">Donor Camp</p>
                </div>
                
        </Carousel>
        
        
        
        
        
      </>
    )
}