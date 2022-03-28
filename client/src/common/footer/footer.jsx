import React from 'react';
import "./footer.css";

export default function footer() 
{
    return (
        <div className="footer-div container-fluid p-5">
            <div className="row">
                <ul className="col-lg-3 footer-1st ">
                    <li><i className="fas fa-caret-right"></i>Accessibility</li>
                    <li><a href="/privacypolicy"><i className="fas fa-caret-right"></i>Privacy Policy</a></li>
                    <li><i className="fas fa-caret-right"></i>Term Of Use</li>
                    <li><i className="fas fa-caret-right"></i>How to use?</li>
                    <li><i className="fas fa-caret-right"></i>Why donate?</li>
                    <li><i className="fas fa-caret-right"></i>FAQs</li>
                </ul>
                <div className="col-lg-4 footer-2nd">
                    <div className="smartphone" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div className="content"></div>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Mobile Version </h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className='modal-body d-flex justify-content-around'>
                                        <img className="mr-5" src="https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=https://c8.alamy.com/comp/2F6B84F/website-under-construction-isometric-landing-page-internet-software-maintenance-with-countdown-webpage-update-repair-or-development-building-crane-and-pc-desktop-on-huge-clock-3d-vector-web-banner-2F6B84F.jpg" id="QR_IMG" width="100"   />
                                        <div className='mx-1'></div>
                                        <p className='text-start '>App is under construction. <span>We Will Release soon Mobile version Of our WebApp. After that you can scan this qr code from your mobile to get download our app</span></p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="Modalokbtn">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 row footer-3rd">
                    <div>
                        <input className="email-input" placeholder="Your Email Adress" />
                        <button className="sub-btn">Subscribe</button>
                    </div>
                    <ul className="col-12 icon-div">
                        <i data-bs-toggle="tooltip" data-bs-placement="bottom" title="Facebook" className="helicopter fab fa-facebook-f"></i>
                        <i data-bs-toggle="tooltip" data-bs-placement="bottom" title="Instagram" className="helicopter2 fab fa-instagram"></i>
                        <i data-bs-toggle="tooltip" data-bs-placement="bottom" title="Twitter" className="helicopter3 fab fa-twitter"></i>
                        <i data-bs-toggle="tooltip" data-bs-placement="bottom" title="Linkdin" className="helicopter4 fab fa-linkedin-in"></i>
                    </ul>
                </div>
            </div>
            <div className="last-footer">
                <p>
                    Copyrights <i className="far fa-copyright"></i> 2021, All Rights Reserved. Site Designed & Maintained By BloodDonorWebsite.com
                </p>
            </div>
        </div>
    )
}
