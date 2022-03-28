import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import i1 from "../../../assets/image-1.jpg";
import i2 from "../../../assets/image-2.jpg"
import i3 from "../../../assets/image-3.jpg"
import i4 from "../../../assets/image-4.webp"
import i5 from "../../../assets/image-5.jpg"
import i6 from "../../../assets/image-6.jpg"
import Typewriter from "typewriter-effect";
export default function Mains() 
{
  var i = 0;
  var txt = 'Loreum , ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam ex tenetur molestias, molestiae blanditiis facilis quaerat aut voluptates. Ex veritatis aliquam blanditiis neque eius assumenda impedit inventore molestiaeAb';
  var speed = 50;

  function typeWriter() 
  {
    if (i < txt.length) {
      document.getElementsByClassName("demo")[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  return (
    <div className="container-fluid main-page">
    <div className="row">      
      <div className="col-lg-6 p-5 " data-aos="fade-up-right" data-aos-delay="200">   
      <Typewriter
      className="heading"
      onInit={(typewriter)=> {
      typewriter.typeString("Our Motto is")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Every Life Matters...")
      .start();
      }}
      />   
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam ex tenetur molestias, molestiae blanditiis facilis quaerat aut voluptates. Ex veritatis aliquam blanditiis neque eius assumenda impedit inventore molestiaeAb
        <br/><span className="demo"></span>
      </p>    
          <li class="content__item">
            {/* style.css */}
  					<button onClick={typeWriter} className="button button--hyperion">
              <span><span>Read More</span></span>
            </button>
				  </li>
      </div>
      
      <div  className="col-lg-6" data-aos="fade-up-left" data-aos-delay="200">
        {/* cube */}
        <section className="cube-div">
            <div class="rt-container">
              <div class="col-rt-12">
                <div class="Scriptcontent">
                  <div class="contenedor"> 
                      <div class="cube">
                      	<div class="card">
                          <a href="#">
                      			<img src={i1} title="Soto y Caldevilla de Valdeón" alt="Soto y Caldevilla de Valdeón" height="290px" width="290px" />
                      		</a>
                        </div>
                      	<div class="card">
                          <a href="#">
                     				<img src={i2} title="Un poco de nieve en agosto" alt="Un poco de nieve en agosto" width="290px" height="290px"/>
                     			</a>
                        </div>
                      	<div class="card">
                          <a href="#">
                  					<img src={i3} title="Un rebeco" alt="Un rebeco" width="290px" height="290px"/>
                				  </a>
                        </div>
                				<div class="card">
                            <a href="#">
                    					<img src={i4} title="Posada de Valdeón" alt="Posada de Valdeón" width="290px" height="290px"/>
                  				  </a>
                        </div>
                 				<div class="card">
                          <a href="#">
                  					<img src={i5} title="Refugio de Pantivalles" alt="Refugio de Pantivalles" width="290px" height="290px"/>
                				  </a>
                        </div>
                				<div class="card">
                          <a href="#">
                  					<img src={i6} title="Unas montañas" alt="Unas montañas" width="290px" height="290px"/>
                          </a>
                 				</div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
    </div>
  );
}
