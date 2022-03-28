import React from 'react'
import Footer from "../../common/footer/footer";
import "./contact.css";
import Mailer from './comp/mailer';

export default function contactus() 
{
    return (
        <div>
            <div className="wallpaper mb-5 container-fluid">
                <h1>Contact Us</h1>
                <img class="swingimage" src="http://sonerimarketing.com/wp-content/uploads/2022/01/hanging-phone.png" alt="" width="50" />
            </div>
           
            <div className="container-fluid">
            <div className="contactus-div container mb-5">
            <div className="row">
                <ul className="contact-info shadow col-lg-5 col-md-12 mx-4">
                    <li><i class="fas fa-phone"></i><a href="tel:+4733378901">+47 333 78 901</a></li>
                    <li><i class="fas fa-map-marked-alt"></i>PUCIT, Near Doctor Hospital, Lahore. </li>
                    <li><i class="fas fa-envelope-open-text"></i><a href = "mailto:abc@example.com">blooddonorwebsite.com</a></li>
                    <li><i class="fab fa-facebook-f"></i>facebook page</li>
                    <li><i class="fab fa-youtube"></i>youtube channel name</li>
                    <li><i class="fab fa-twitter"></i>twiter id</li>
                </ul>
                <div className="map-div shadow col-lg-5 col-md-12 mx-4">
                </div>
              <Mailer/>
                <div className="ad-div shadow col-lg-5 col-md-12 mx-4">
                  Asdsdd
                </div>
            </div>
            </div>
            </div>
            <Footer />
            
        </div>
    )
}
