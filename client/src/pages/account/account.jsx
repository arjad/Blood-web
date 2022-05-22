import React ,{useContext,useEffect} from 'react';
import Profile from './comp/Profile/profile';
import Loginform from './comp/loginform/Loginform.jsx';
import { useUserContext } from "../../context/userContext";

export default function App() 
{
  const { user } = useUserContext();

  return (
    <div className="login-div ">
      {user.isGuestUser ? <Loginform /> : <Profile />}
    </div>
  );
}
