import React from "react";
import ModalImage from "react-modal-image";
import "../home.css";
// import Doc from "../../../assets/benifits.jpg"
function Benifits() 
{
    let urlToTinyImageFile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhuDUGyGy5QCWdV4iwv_2SpMQnABvKKSt3g&usqp=CAU";
    let urlToBig="https://static.toiimg.com/photo/msid-76714980/76714980.jpg?1422821";
    return (
    <div className="container my-5">
      {/* //heading */}
      <br/><br/>
      <div className="row justify-content-center">
        <h3 className="text-blue fw-bold text-center" data-aos="fade-down">
          AN EASIER WAY TO GET INSURED
        </h3>
        <p  data-aos="fade-down" data-aos-delay="200" className="text-center " style={{ color: "#ABAAAA" }}>
          Compare life insurance, health insurance, auto insurance and travel
          insurance to select the best plan for you.
        </p>
      </div>

      <div className="row align-items-center justify-content-between text-blue">
        <div className="col-md-3">
          <div className="row my-5" data-aos="fade-right" data-aos-delay="200">
            <div className="col-md-12">
              <h4 className="position-relative">
                Packages<span className="steps_count">01</span>
              </h4>
              <p>
                We offer value for money packages to our valued clients and
                provide adequate risk coverage.
              </p>
            </div>
          </div>
          {/* left points */}
          <div className="row my-5" data-aos="fade-right" data-aos-delay="250">
            <div className="col-md-12">
              <h4 className="position-relative">
              Hassle Free Transaction<span className="steps_count">02</span>
              </h4>
              <p>
                We offer value for money packages to our valued clients and
                provide adequate risk coverage.
              </p>
            </div>
          </div>
          <div className="row my-5" data-aos="fade-right" data-aos-delay="300">
            <div className="col-md-12">
              <h4 className="position-relative">
              Right choice<span className="steps_count">03</span>
              </h4>
              <p>
                We offer value for money packages to our valued clients and
                provide adequate risk coverage.
              </p>
            </div>
          </div>
        </div>

        {/* center img */}
        <div className="col-md-6 d-flex p-5">
          <div className="benifits-img blob" data-aos="zoom-in" >
            <div>   
              {/* <ModalImage
                    className="imgs"
                    small={urlToTinyImageFile}
                    medium={urlToBig}
                    hideDownload
                    hideZoom
                    showRotate
                    alt="Medical Staff"
              /> */}
            </div>
          </div>
        </div>

        {/* right points */}
        <div className="col-md-3">
          <div className="row my-5" data-aos="fade-left" data-aos-delay="200">
            <div className="col-md-12 benifit-r">
              <h4 className="position-relative">
              Online Access<span className="steps_count2">04</span>
              </h4>
              <p>
              We offer value for money packages to our valued clients and provide adequate risk coverage.
              </p>
            </div>
          </div>
          <div className="row my-5 " data-aos="fade-left" data-aos-delay="250">
            <div className="col-md-12 benifit-r">
              <h4 className="position-relative">
              E-Payments<span className="steps_count2">05</span>
              </h4>
              <p>
              You can buy insurance from anywhere, any time. Secure, hassle free transactions boost up your reliance and satisfaction. 
              </p>
            </div>
          </div>
          <div className="row my-5"  data-aos="fade-left" data-aos-delay="300">
            <div className="col-md-12 benifit-r">
              <h4 className="position-relative">
              Online Claim<span className="steps_count2">06</span>
              </h4>
              <p>
                We offer value for money packages to our valued clients and
                provide adequate risk coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Benifits;


