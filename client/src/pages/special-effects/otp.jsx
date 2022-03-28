import React from 'react';
import firebase from '../../firebase.js';
// import OtpInput from 'react-otp-input';
import "./special.css";

class Otp extends React.Component 
{
  state = { otp: '' };

  handleChangeotp = (otp) => this.setState({ otp });

  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+92" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  render() 
  {
    return (
      <div>
        <form class="input-group mb-3" onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="number" class="form-control" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <div class="input-group-append">
            <button type="submit" className='btn btn-secondary'>Send OTP</button>
          </div>
        </form>
        <form  class="input-group" onSubmit={this.onSubmitOTP}>
            <input className='otp-box' value={this.state.otp} onChange={this.handleChangeotp}    />
        <button type="submit" className='btn btn-secondary' onClick={this.handleChange}>Submit</button>

         
        </form>
        
      </div>
    )
  }
}
export default Otp;
