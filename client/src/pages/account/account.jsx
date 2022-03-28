import { MenuItem, Select } from '@mui/material'
import React ,{useState} from 'react';
import Profile from './comp/Profile/profile';
import Loginform from './comp/loginform/Loginform.jsx';
export default function App() 
{
  const [isAuth, setIsAuth] = useState(false);
    
  return (
    <div className="login-div ">
      {isAuth ? (<div><Profile/><div><button onClick={()=>{setIsAuth(false)}}>Logout</button></div></div>) : (<div><Loginform/><button onClick={()=>{setIsAuth(true)}}>Login</button></div>) }	   
    </div>
  );
}
