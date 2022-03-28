import "./special.css";
import { useCallback, useEffect, useState } from "react";
import {Link} from "react-router-dom";
function RightClick() {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false); // hide menu

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setAnchorPoint]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return (
    <div className="shadow bg-light">
      {show ? (
        <ul
          className="menu"
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x
          }}
        >
          <li>Open my Account</li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/searchblood">Search Blood</Link>
          <Link to="/contact">Contact</Link>
          
          <hr className="divider" />
          <li>Exit</li>
        </ul>
      ) : (
        <> </>
      )}
    </div>
  );
}
export default RightClick;



// import React from 'react'

// const RightClick = () => {
//   const copyCoupon = (e, data) => {
//     var coupon = data.copy
//     navigator.clipboard.writeText(coupon)
//     alert(`Coupon code ${coupon} copied to your clipboard`)
//   }
//   document.onclick = hideMenu; 
//   document.oncontextmenu = rightClick; 

//    function hideMenu() { 
//        document.getElementsByClassName("context-menu")[0].style.display = "none";
//    } 

//    function rightClick(e) { 
//        e.preventDefault(); 

//        if (document.getElementsByClassName("context-menu")[0].style.display == "block")
//        { 
//            hideMenu(); 
//        }
//        else
//        {
//            var menu = document.getElementsByClassName("context-menu")[0]      
//            menu.style.display = 'block'; 
//            menu.style.left = e.pageX + "px"; 
//            menu.style.top = e.pageY + "px"; 
//        } 
//    } 

//     return (
//         <>
//         <div className="context-menu" style={{display: "none"}}> 
//         <ul class="menu"> 
//             <li className="share"><a href="#"><i class="fa fa-share" aria-hidden="true"></i> Share</a></li> 
//             <li className="rename"><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i> Rename</a></li> 
//             <li className="link"><a href="#"><i class="fa fa-link" aria-hidden="true"></i> Copy Link Address</a></li> 
//             <li className="copy"><a href="#"><i class="fa fa-copy" aria-hidden="true"></i> Copy to</a></li> 
//             <li className="paste"><a href="#"><i class="fa fa-paste" aria-hidden="true"></i> Move to</a></li> 
//             <li className="download"><a href="#"><i class="fa fa-download" aria-hidden="true"></i> Download</a></li> 
//             <li className="trash"><a href="#"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a></li> 
//         </ul> 
//         </div> 
//         </>
//     )
// }
// export default RightClick;
