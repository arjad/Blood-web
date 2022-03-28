import './App.css';
// import logo from "../themes/custom/jebsen/logo.png";
import Logic from "./img/diamond/public/front/img/Logistics_0.jpg.png";
import eng from "./img/diamond/public/front/img/Engagement.jpg.png";
import low from "./img/diamond/public/front/img/ZZ20MODOX0040_low (1).jpg.png";
import random from "./img/rect45/public/front/img/re_CIMG1990_b.jpg.png";
import Cap from "./img/rect45/public/front/img/Captial.jpg.png";
import random2 from "./img/diamond/public/front/img/20181107_095822_0.jpg.png";
import beer from "./img/diamond/public/front/img/Beverage (Beer) 1.jpg.png";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function First() 
{
    useEffect(() => {
      AOS.init({
        duration: 800,
      });
    }, [])
  return (
      <main role="main" class="first-div border ">
                     
         <article data-history-node-id="147" role="article" about="/node/147" class="node node--type-homepage node--promoted node--sticky node--view-mode-full clearfix">
         <div class="welcome">
                     
            {/* <!-- main first started --> */}
            <div class="wrapper">
                  {/* <!-- right images --> */}
                  <div class="right images">
                     <div class="field field--name-field-hp-images-2x2 field--type-image field--label-hidden">
                        <div class="field__items">
                           
                           <div class="field__item" data-aos="fade-zoom-in"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="300"
                              data-aos-offset="0">  
                              <img src={eng} width="400" height="400" alt="" loading="lazy" typeof="foaf:Image" class="image-style-diamond" />
                              </div>
                           <div class="field__item" data-aos="fade-zoom-in"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="100"
                              data-aos-offset="0">  
                              <img src={low} width="400" height="400" alt="" loading="lazy" typeof="foaf:Image" class="image-style-diamond" />
                              </div>
                        </div>
                     </div>
                     <div class="field field--name-field-hp-images-2x1 field--type-image field--label-hidden">
                        <div class="field__items">
                           <div class="field__item" data-aos="fade-zoom-in"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="200"
                              data-aos-offset="0">  <img src={random} width="325" height="325" alt="" loading="lazy" typeof="foaf:Image" class="image-style-rect45" />
                           </div>
                           <div class="field__item" data-aos="fade-zoom-in"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="800"
                              data-aos-offset="0">  <img src={Cap} width="325" height="325" alt="" loading="lazy" typeof="foaf:Image" class="image-style-rect45" />
                           </div>
                        </div>
                     </div>
                     <div class="field field--name-field-hp-images-1x1 field--type-image field--label-hidden">
                        <div class="field__items">
                           <div class="field__item" data-aos="fade-zoom-in"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="600"
                              data-aos-offset="0">  <img src={Logic} width="400" height="400" alt="" loading="lazy" typeof="foaf:Image" class="image-style-diamond" />
                           </div>
                           <div class="field__item" data-aos="fade-zoom-in"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="1800"
                              data-aos-offset="0">  <img src={beer} width="400" height="400" alt="" loading="lazy" typeof="foaf:Image" class="image-style-diamond" />
                           </div>
                           <div class="field__item" data-aos="fade-zoom-in"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="350"
                              data-aos-offset="0">  <img src={beer} width="400" height="400" alt="" loading="lazy" typeof="foaf:Image" class="image-style-diamond" />
                           </div>
                           <div class="field__item" data-aos="fade-zoom-in"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="900"
                              data-aos-offset="0">  <img src={beer} width="400" height="400" alt="" loading="lazy" typeof="foaf:Image" class="image-style-diamond" />
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <!-- left haedimng  --> */}
                  <div class="left">
                     <h2>Welcome to </h2>
                     <h4>Your blood bank</h4>
                  </div>
                  {/* <!-- left images --> */}
                  <div class="left-left images">
                     <div class="field field--name-field-hp-images-2x2-2 field--type-image field--label-hidden">
                        <div class="field__item" data-aos="fade-zoom-in"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="600"
                              data-aos-offset="0">  
                           <img src={beer}width="400" height="400" alt="" loading="lazy" typeof="foaf:Image" class="image-style-diamond" />
                        </div>
                     </div>
                     <div class="field field--name-field-hp-images-1x1-2 field--type-image field--label-hidden">
                        <div class="field__items">
                           <div class="field__item" data-aos="fade-zoom-in"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="800"
                              data-aos-offset="0">  <img src={random2} width="400" height="400" alt="" loading="lazy" typeof="foaf:Image" class="image-style-diamond" /></div>
                           <div class="field__item" data-aos="fade-zoom-in"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="800"
                              data-aos-offset="0">  <img src={beer} width="400" height="400" alt="" loading="lazy" typeof="foaf:Image" class="image-style-diamond" /></div>
                        </div>
                     </div>
                  </div>
                  {/* <!-- left-image end --> */}
            </div>
               {/* <!-- main 1st ended --> */}
               <br/><br/> <br/><br/> <br/><br/><br/><br/> <br/><br/> <br/><br/>
                 
            {/* <!-- 2nd part --> */}
            <div class=" about-us wrapper">
               <div class="right images">
                  <div class="field field--name-field-hp-images-about-us field--type-image field--label-hidden">
                     <div class="field__item" data-aos="fade-up" data-aos-anchor-placement="top-bottom">  
                        <img src={beer} width="400" height="400" alt="" loading="lazy" typeof="foaf:Image" class="image-style-diamond" />
                     </div>
                  </div>
               </div>
               <div class="left">
                  <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden" >
                     <div class="field__item">
                        <h2>At Jebsen<br />
                           success bree
                        </h2>
                        <p>With or <strong>communities</strong>, auable asset — our <strong>people</strong>.</p>
                        <p>We  a diverse platform that provides <strong>continuou exposure</strong>.</p>
                        
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- 2nd part end --> */}
            </div>
         {/*   <!-- welcome ended --> */}
         </article>
      </main>
  
  );
}

export default First;
