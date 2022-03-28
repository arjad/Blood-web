import React from 'react';
import emailjs from "emailjs-com";

function mailer(props) 
{
    let sendemail =(e)=>{
        e.preventDefault();

        //we need service id , template id, user id
        emailjs.sendForm('service_wuepscd', 'template_enyal5p',e.target,"user_BpzazZBzDkHCOivRTRuwI").then(res=>{
            console.log(res)
        }).catch(e=> console.log(e));
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
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label>Subject</label>
                    <input name="subject" type="text" class="form-control" id="exampleInputPassword1" placeholder="Subject "/>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea name="msg" className="form-control" placeholder="Type Short Description" rows="3"></textarea>
                  </div>
                  <br/>
                  <button type="submit" class="btn send-mail-btn">Send</button>
        </form> 
    </div>);
}

export default mailer;