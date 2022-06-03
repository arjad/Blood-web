import "./loginform.css";
import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import Footer from "../../../../common/footer/footer";
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from "yup";
import { useUserContext } from "../../../../context/userContext";

function Loginform() 
{
  const { logInc } = useUserContext();
  let history = useHistory();

  const signUpButton = document.querySelector('.signUp');
  const signInButton = document.querySelector('.signIn');

  //yup schema
  const LoginSchema = Yup.object().shape({
    login_email: Yup.string().email('* Invalid email').required('* Email is required'),
    login_pass: Yup.string().required('* Password is required'),
  });

  //post user info
  // const history = useHistory();
  const [user, setuser] = useState({
    fname: "", lname: "", blood: "", phoneno: "", email: "", pass: ""
  })

  //use signle state hooks to handle all input values
  let att_name, att_value;
  const handleinput = (e) => {

    att_name = e.target.name;
    att_value = e.target.value;

    setuser({ ...user, [att_name]: att_value })
    console.log("user state = ", user);
  }

  // const [allproducts , setallproducts] = useState([]); 
  const [login_email, setlogin_email] = useState('');
  const [login_pass, setlogin_pass] = useState('');
  const [allusers, setallusers] = useState([]);

  //////////
  ///show all users (only to admin)
  const getuserback = async (e) => {
    //getting response from api (or mongo db as both have same data)
    fetch("http://localhost:5000/users/read")
      .then((response) => {

        if (response.ok) {
          return response.json();
        }
        else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then(data => {
        console.log("READ-   All DB = ", data);
        setallusers([...data])

      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  /////////
  /// register post data 
  const PostUser = async (e) => {
    e.preventDefault();

    //object destructring
    const { fname, lname, blood, email, pass } = user;

    console.log(fname,lname);
    if(fname && lname && blood && email && pass)
    {
      //post to server address
      const res = await fetch("http://localhost:5000/users/insert", {
        method: "POST",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ fname, lname, blood, email, pass })
      })
      const data = await res.json();
      if (data.status === 422 || !data) {
        // window.alert("POST- invalid reg");
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Sign Up Failed',
          text: "Error in sending data to server",
          showConfirmButton: false,
          timer: 1500
        })
      }
      else {
        console.log("sign up- valid reg ");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Sign Up Success',
          text: "You are now registered member",
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
    else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Sign Up Failed',
        text: "Please fill all fields",
        showConfirmButton: false,
        timer: 1500
      })
    }
  }


  /////////
  /// login post data 
  const LoginUser = async (e) => {
    //object destructring
    const { login_email, login_pass } = e;

    //post to server address
    const res = await fetch("http://localhost:5000/users/logininsert", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ login_email, login_pass })
    })
    const data = await res.json();
    // res.json has message in json formate
    if ( data.message=="Invalid Credientials" || !data) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'LoginIn Failed',
        text: 'Invalid Credientials',
        showConfirmButton: false,
        timer: 1500
      })

    }
    else if (data.message=="sign in successfully done") {
      console.log("login POST- valid reg ");
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login In Successfull',
        text: 'Welcome Back Again',
        showConfirmButton: false,
        timer: 1500
      })
      logInc(login_email);
      console.log("email = " + login_email)
    }
  }

  let signUpButtons = () => {
    document.querySelector('.container').classList.add("right-panel-active");
  };

  const SignInButtons = () => {
    if (login_email == 'admin@gmail.com' && login_pass == 'admin') {
      // console.log("admin here , auths = ", auths);
    }
    else {
      console.log("not admin");
    }
    document.querySelector('.container').classList.remove("right-panel-active");
  };

  return (
    <div>
      <div className="container login-divs my-5">
        <div class="form-container sign-up-container border">
          {/* sign up */}
          <form method='POST' className='signup-form' action="#">
            <h2>Sign Up</h2>
            <input type="text" placeholder="First Name" name='fname' onChange={handleinput} required/>
            <input type="text" placeholder="Last Name" name='lname' onChange={handleinput} required/>
              <select onChange={handleinput} name="blood" id="bg">
                <option value="" disabled selected>Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            
            <input type="email" placeholder="Email" name='email' onChange={handleinput} required/>
            <input type="password" placeholder="Password" name='pass' onChange={handleinput} required/>
            <button className='signin-btn btn' name='submit' type='submit' onClick={PostUser}>Sign In</button>
          </form>
        </div>

        {/* login */}
        <div class="form-container sign-in-container">
          <br/>
          <br/>
          <br/>
          <Formik
            initialValues={{
              login_email: '',
              login_pass:'',
            }}
            validationSchema={LoginSchema}
            onSubmit={values => {
              LoginUser(values);
              // console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <div>
                <Form className='signin-form' action="#">
                  <h1>Sign in</h1>
                  <br />
                  <Field name="login_email" className="signin-form-input" placeholder="Your Email" type="email" />
                  {errors.login_email && touched.login_email ? <p>{errors.login_email}</p> : null}
                  <Field name="login_pass" className="signin-form-input" placeholder="Password" type="pass" />
                  {errors.login_pass && touched.login_pass ? <p>{errors.login_pass}</p> : null}
                  
                  <br/>
                  <button className='signin-btn btn' type="submit">Sign In</button>
                </Form>
              </div>
            )}
          </Formik>
        </div>

        {/* slide div */}
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>If you have an account already, You shpuld login</p>
              <button className="ghost signIn slide-btn btn" onClick={SignInButtons}>Sign In</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend <i class="fas fa-smile-wink"></i></h1>
              <p>If you donot have an account, then you can sign up to your new account </p>
              <button className="ghost signIn btn slide-btn" ClassName="signUp" onClick={signUpButtons}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
              <br/>
      <Footer />
    </div>
  )
}

export default Loginform

  

      