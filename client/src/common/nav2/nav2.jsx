import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Underline from "../../assets/underline.png";
import "./nav2.css";
import Logo from "../../assets/logo.PNG";

const Nav2 = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  
  let arjad= () =>{
    let modal = document.querySelector(".hamburger-menu");
    if (modal) 
    {
      modal.classList.toggle("bgc");
    }
  }
  
return (
    <>
      <nav className="main-nav shadow">
        {/* 1st logo part  */}
        <img src={Logo} className="logo"/>
        
        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <img className="underline-img" src={Underline}/>
            </li>
            <li>
              <Link to="/about">About</Link>
              <img className="underline-img" src={Underline}/>
              
            </li>
            <li>
              <Link to="/searchblood">Search Blood</Link>
              <img className="underline-img" src={Underline}/>

            </li>
            <li>
              <Link to="/posts">Posts</Link>
              <img className="underline-img" src={Underline}/>

            </li>

            <li>
              <Link to="/contact">Contact</Link>
              <img className="underline-img" src={Underline}/>

            </li>
            <li>
              <Link to="/account">Account</Link>
              <img className="underline-img" src={Underline}/>

            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() =>
              { 
                arjad();
                setShowMediaIcons(!showMediaIcons)
              }}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
        
      </nav>
    </>
  );
};

export default Nav2;