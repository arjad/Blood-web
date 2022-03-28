import React from 'react'
import Underline from "../../assets/underline.png";
import "./about.css";
import Footer from "../../common/footer/footer";
import Team from "../../assets/team.jpg";
import Chart from "./comp/chart";

export default function about() 
{
    return (
    <div>
        <div className="wallpaper mb-5 border container-fluid">
            <h1>About Us</h1>
            {/* book start */}
            <div class="imgLoader"></div>

            <div class="containers">

              <div class="book">
                <div class="gap"></div>
                <div class="pages">
                  <div class="page"></div>
                  <div class="page"></div>
                  <div class="page"></div>
                  <div class="page"></div>
                  <div class="page"></div>
                  <div class="page"></div>
                </div>
                <div class="flips">
                  <div class="flip flip1">
                    <div class="flip flip2">
                      <div class="flip flip3">
                        <div class="flip flip4">
                          <div class="flip flip5">
                            <div class="flip flip6">
                              <div class="flip flip7"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* //book ends */}
        </div>
        <br/>
        <br/>
        <br/>
        <div className="about-div">
        <div className="mt-5 container ">
            <div className="heading_donors">
                <h2>Who Are We </h2>
                <img src={Underline}/>
            </div>
            <br/><br/>
            <p >
            We are totally Non Government, Non Political Volunteer Organization and our purpose is to Seek pleasure of Allah by Saving Human lives by facilitating blood.
            We provide blood donations with few clicks. We try our level best to meet 100% blood requirements voluntarily through our website. We have a database of donors willing to donate blood who can be reached through our website.
            </p>
            <p>
            Our mission is to fulfill every blood request in the country with a promising web portal and motivated individuals who are willing to donate blood.</p>
        
        </div>
        <div className="mt-5 container ">
            <div className="heading_donors">
                <h2>How We Started </h2>
                <img src={Underline}/>
            </div>
            <br/><br/>
            <p >
              We started this project as our university final year project. And we decided to launch it to facilitate others.
              University's Blood Society helped us by providing donors information in this regard.
            </p>
            
        </div>
        {/* chart */}
        <Chart/>

        {/* team */}
        <div class="d10 container">

        <br/><br/>
        <h1 className='text-center'>Our Blood Team</h1>
        <p className='text-center'> asdiuasd suy dasydausyduas dyas dyuay doi suy dasyda usyduas dyas dyuaysyd usay dasysyd usay dasyd uadyaasd<br/>
            sdiuasd suy dasydausyduas dyas dyuaysyd usay dasyd uadyaasd
        </p><br/><br/><br/>

        <section className='all-team row'>
        <div class="imgd imgd1 col-md-6 col-lg-4 col-sm-12">

          <div class="iscroll ">
            <img class="img"  src={Team}/>
            <div class="opacity">          </div>
            <div class="fi"> 
                <i class="fab fa-facebook-f"></i><br/>
                <i class="fab fa-twitter"></i><br/>
                <i class="fab fa-invision"></i><br/>
                <i class="fab fa-google-plus-g"></i>
            </div>
          </div>
          <h3 className='name'>Arjad</h3>
          <h4>Company Manager</h4>
       
        </div>


        <div class="imgd col-lg-4 col-md-6 col-sm-12">

          <div class="iscroll">
            <img class="img"  src={Team}/>
            <div class="opacity">

            </div>
            <div class="fi">        <i class="fab fa-facebook-f"></i><br/>
              <i class="fab fa-twitter"></i><br/>
              <i class="fab fa-invision"></i><br/>
              <i class="fab fa-google-plus-g"></i></div>

          </div>


          <h3 className='name'>Asim Hussain</h3>
          <h4>Founder of CEO</h4>
        
        </div>
        
        
        <div class="imgd col-lg-4 col-md-6 col-sm-12">
        <div class="iscroll">
          <img class="img"  src={Team}/>
          <div class="opacity">

          </div>
          <div class="fi">        <i class="fab fa-facebook-f"></i><br/>
            <i class="fab fa-twitter"></i><br/>
            <i class="fab fa-invision"></i><br/>
            <i class="fab fa-google-plus-g"></i></div>
        </div>

        <h3 className='name'>Javed Jutt</h3>
        <h4>Adsd Sdfsdd</h4>
        </div>
        </section>
      </div>
      </div>
        <Footer />
    </div>
    )
}
