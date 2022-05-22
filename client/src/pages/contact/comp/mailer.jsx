import React from 'react';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

function mailer(props) 
{
    let sendemail =(e)=>{
        e.preventDefault();

        if(e.target.querySelector("#exampleInputEmail1").value && e.target.querySelector("#exampleInputPassword1").value && e.target.querySelector(".msg").value)
        {
          // console.log("all are present")
          //we need service id , template id, user id
          emailjs.sendForm('service_wuepscd', 'template_enyal5p',e.target,"user_BpzazZBzDkHCOivRTRuwI")
          .then(res=>{
              console.log(res)
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Email is Sent',
                text: "You are done",
                showConfirmButton: false,
                timer: 1500
              })
          })
          .catch((e)=> {
            console.log(e)
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Email is not Sent',
              text: "Check Connection",
              showConfirmButton: false,
              timer: 1500
          });
          })
        }
        else{
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Email is not sent',
            text: "Clearly check all fields",
            showConfirmButton: false,
            timer: 1500
          })
        }
    }
    return (<div>          
          <form onSubmit={sendemail} className="complain-form shadow">
                    <div className="heading_donors">
                        <h3>Suggestion / Complain form</h3>
                    </div>
                    <br/>
                   <div class="form-group">
                    <label for="exampleInputEmail1">Your Name</label>
                    <input type="name" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name"/>
                  </div>
                  <div class="form-group">
                    <label>Subject</label>
                    <input name="subject" type="text" class="form-control" id="exampleInputPassword1" placeholder="Subject "/>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea name="msg" className="form-control msg" placeholder="Type Short Description" rows="3"></textarea>
                  </div>
                  <br/>
                  <button type="submit" class="btn send-mail-btn">Send</button>
        </form> 
    </div>);
}

export default mailer;