import React,{useEffect,useState} from 'react'
import Home from '../src/pages/home/Home';
import About from '../src/pages/about/about';
import Searchblood from "../src/pages/searchblood/searchblood";
import Contactus from "../src/pages/contact/contactus";
import ErrorPage from "./pages/error/error";
import Post from './pages/posts/Posts';
import Privacy from "./pages/extra/privacypolicy/privacypolicy";
import "./style/styles.css";
import Profile from "./pages/account/comp/Profile/profile";
import Nav2 from "../src/common/nav2/nav2";
import Acoount from "./pages/account/account";
import ProtectedRoute from "./../src/ProtectedRoute";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() 
{
    
    useEffect(() => {
        AOS.init({
          duration: 800,
        });
      }, [])
    return (
        <>
            <Router> 
            <div class="wrapper-bg container-fluid">
            <div class="box">
                <div className='no1'></div>
                <div className='no2'></div>
                <div className='no3'></div>
                <div className='no4'></div>
                <div className='no5'></div>
                <div className='no11'></div>  
            </div>
        

                <Nav2 />
                <div className='body-bg'>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/searchblood" exact component={Searchblood}/>
                    <Route path="/contact" exact component={Contactus}/>
                    <Route path="/account" exact component={Acoount}/>
                    <Route path="/privacypolicy" exact component={Privacy}/>
                    <Route path="/posts" exact component={Post}/>
                    <Route path="/profile" exact component={Profile} />
                    <Route><ErrorPage/></Route>

                </Switch>
                </div>
        </div>

            </Router>
        </>
    )
}
export default App;