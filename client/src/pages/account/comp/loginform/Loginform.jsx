import "./loginform.css";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Footer from "../../../../common/footer/footer";
import { Formik, Form, Field } from 'formik';

import * as Yup from "yup";

function Loginform() {
  let history = useHistory();
  const [auths, setauths] = useState(false);
  const signUpButton = document.querySelector('.signUp');
  const signInButton = document.querySelector('.signIn');

  //yup schema
  const LoginSchema = Yup.object().shape({
    login_email: Yup.string().email('Invalid email').required('Email Required'),
    login_pass: Yup.string().required('Pass Required'),
    
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
    const { fname, lname, blood, phoneno, email, pass } = user;

    //post to server address
    const res = await fetch("http://localhost:5000/users/insert", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fname, lname, blood, phoneno, email, pass })
    })
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("POST- invalid reg");
    }
    else {
      console.log("sign up- valid reg ");
    }
  }



  /////////
  /// login post data 
  const LoginUser = async (e) => {
    // e.preventDefault();

    if (e.login_email == 'admin@gmail.com' && e.login_pass == 'admin') {
      // setauths(true);
      console.log("admin here , auths = ", auths);
    }
    else {
      console.log("not admin");
    }

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
    if (data.status === 400 || data.status === 422 || !data) {
      window.alert("POST- invalid reg");

    }
    else {
      console.log("login POST- valid reg ");
      // history.push("/profile");
    }
  }

  let signUpButtons = () => {
    document.querySelector('.container').classList.add("right-panel-active");
  };

  const SignInButtons = () => {
    if (login_email == 'admin@gmail.com' && login_pass == 'admin') {
      setauths(true);
      console.log("admin here , auths = ", auths);
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
            <h1>Sign Up</h1>
            <input type="text" placeholder="First Name" name='fname' onChange={handleinput} />
            <input type="text" placeholder="Last Name" name='lname' onChange={handleinput} />
            <input type="text" placeholder="Blood Group" name='blood' onChange={handleinput} />
            <input type="number" placeholder="Phone Number" name='phoneno' onChange={handleinput} />
            <input type="email" placeholder="Email" name='email' onChange={handleinput} />
            <input type="password" placeholder="Password" name='pass' onChange={handleinput} />
            <button className='signin-btn btn' name='submit' type='submit' onClick={PostUser}>Sign In</button>
          </form>
        </div>

        {/* login */}
        <div class="form-container sign-in-container">
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
                <Form>
                  {/* <Field name="email" type="email" /> */}
                  {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
                  {/* <button type="submit">Submit</button> */}
                </Form>
                <Form className='signin-form' action="#">
                  <h1>Sign in</h1>
                  <br />
                  <Field name="login_email" placeholder="Your Email" type="email" />
                  {errors.login_email && touched.login_email ? <div>{errors.login_email}</div> : null}
                  <Field name="login_pass" placeholder="Password" type="pass" />
                  {errors.login_pass && touched.login_pass ? <div>{errors.login_pass}</div> : null}
                  
                  {/* <input type="email" placeholder="Email" onChange={(e) => { setlogin_email(e.target.value) }} /> */}
                  {/* <input type="password" placeholder="Password" onChange={(e) => { setlogin_pass(e.target.value) }} /> */}

                  <br/>
                  <button className='signin-btn btn' type="submit"
                    // onClick={LoginUser}
                  >Sign In</button>
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

      <Footer />
    </div>
  )
}

export default Loginform