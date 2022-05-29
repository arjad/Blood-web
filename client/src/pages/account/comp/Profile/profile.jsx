import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import "./profile.css";
import { Auth } from '../../../../App';
import { useUserContext } from "../../../../context/userContext";

function Profile() 
{
    
    const [load, setload] = useState();
    const { user, logOut } = useUserContext();

  //////////
  ///show all user
  const getuserinfo = async (e)=>{  

    setload(true)

    //getting response from api (or mongo db as both have same data)
    fetch("http://localhost:5000/users/read")
    .then((response) => {

      if (response.ok) 
      {
        return response.json();
      } 
      else 
      {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      setload(false)
      console.log("READ-   All users = ", data);

    })
    .catch((error) => console.error("FETCH ERROR:", error));
  }

    //////////
  ///show single user 
  const getsingleuserinfo = async (e)=>{  
    console.log("single user function");
    setload(true)

    //getting response from api (or mongo db as both have same data)
    fetch("http://localhost:5000/users/read/:uid")
    .then((response) => {

      if (response.ok) 
      {
        return response.json();
      } 
      else 
      {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      setload(false)
      console.log("READ-single users = ", data);

    })
    .catch((error) => console.error("FETCH ERROR:", error));
  }

  const { uid } = useParams();


  return (
    <div>
         <button class="btn-green btn mt-3" onClick={getsingleuserinfo}>
	        <img class="icon" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png"/> <p>Reload</p>
	    </button>

	         
<div class="rounded bg-transparent mx-5 mb-0">
        <div className="ui message success">
          <h3>You are now logged in as , {user.name}</h3>
            {!user.isGuestUser && (
              <button className="btn btn-primary" onClick={logOut}>
                LogOut
              </button>
            )}
        </div>

    <div class="row ">
        <div class="col-3">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Edogaru</span>
              <span class="text-black-50">edogaru@mail.com.my</span><span> </span>
            </div>
        </div>

        <div class="col-5">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Details</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6">
                        <label class="labels">First Name <sm>(public)</sm></label>
                        <input type="text" class="form-control" placeholder="first name" value={user.fname}/>
                    </div>
                    <div class="col-md-6">
                        <label class="labels">Last Name <sm>(public)</sm></label>
                        <input type="text" class="form-control" value={user.lname} placeholder="surname"/>
                    </div>

                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label class="labels">Member Id <sm>(public)</sm></label>
                            <input type="text" class="form-control" placeholder="first name" value={uid}/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Blood Group <sm>(public)</sm></label>
                            <input type="text" class="form-control" placeholder="in captals" value={user.blood}/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Pucitian <sm>(public)</sm></label>
                            <input type="text" class="form-control" placeholder="yes or no" value={user.blood}/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Pucit Roll No <sm>(private)</sm></label>
                            <input type="text" class="form-control" placeholder="in captals" value={user.blood}/>
                        </div>

                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">Email  <sm>(private)</sm></label>
                            <input type="text" class="form-control" placeholder="enter active email" value={user.email}/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Password  <sm>(private)</sm></label>
                            <input type="password" class="form-control" placeholder="at least 8 characters" value={user.pass}/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Phone No  <sm>(private)</sm></label>
                            <input type="text" class="form-control" placeholder="Active number" value={user.phoneno}/>
                        </div>

                        <div class="col-md-12">
                            <label class="labels">Phone No 2 <sm>(private)</sm></label>
                            <input type="text" class="form-control" placeholder="enter address line 2" value={user.phoneno}/>
                        </div>
                    </div>
                    <div class="row mt-3">

                        <div class="col-md-6">
                            <label class="labels">Area <sm>(public)</sm></label>
                            <input type="text" class="form-control" value={user.area} placeholder="Your Muhala Name"/>
                        </div>
                        <div class="col-md-6">
                            <label class="labels">City <sm>(public)</sm></label>
                            <input type="text" class="form-control" placeholder=" Your City" value={user.city}/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Country <sm>(public)</sm></label>
                            <input type="text" class="form-control" value={user.country} placeholder="Your Country"/>
                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <button class="btn-green btn" type="button">Save Profile</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-3">
            <div class="p-3 py-5">
                <div class="col-md-12">
                    <label class="labels">Medical Record <sm>(private)</sm></label>
                    <input type="text" class="form-control" placeholder="experience" value=""/>
                </div> <br/>
                <div class="col-md-12">
                    <label class="labels">Injures <sm>(private)</sm></label>
                    <input type="text" class="form-control" placeholder="additional details" value=""/>
                </div>
            </div>
        </div>
</div>

</div>
</div>
  )
}

export default Profile



        
