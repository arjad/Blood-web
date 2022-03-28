import React from "react";
import Splash from "../../assets/s1.png";
import Splash2 from "../../assets/s4.png";
import Splash3 from "../../assets/s3.png";
import "./error.css";

export default function Error()
{
    const parallax=(e)=>{
        document.querySelectorAll(".object").forEach(function(move)
        {
          var moving_value = move.getAttribute("data-value");
          var x = (e.clientX * moving_value) / 250;
          var y = (e.clientY * moving_value) / 250;
  
          move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        });
      }
    document.addEventListener("mousemove", parallax);

    return(
        <>
        <br/><br/><br/>
        <div class="container-fluid error-div">
          <h2 class="object" data-value="3">404<br/><span>Error Page</span></h2>
          <img src={Splash} class="object splash-img" data-value="-2" alt=""/>
          <img src={Splash2} class="object" data-value="6" alt=""/>
          <img src={Splash3} class="object" data-value="4" alt=""/>
        </div>

        {/* <AnimatedCursor
          innerSize={15}
          outerSize={25}
          color='255,255,0'
          outerAlpha={0.5}
          innerScale={0.7}
          outerScale={2}
        /> */}
    </>
    )
}