import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "./profile.css";
import { Auth } from '../../../../App';
import { useUserContext } from "../../../../context/userContext";
import axios from "axios";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

function Profile() 
{
  //side panel
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });


  const { logInc } = useUserContext();
  const [load, setload] = useState();
  const { user, logOut } = useUserContext();
  const [mydata,setmydata] = useState({
    _id:"",
    fname:"",
    lname:"",
    email:"",
    blood:"",
    pass:"" ,
    phoneno:"",
    last_donated:"", 
    city:"",
    country:"",
    area:"",  
    country:"", 
    pucit:""
  });
  
  useEffect(() => {
    getsingleuserinfo()
  }, [])    

  //////////
  ///show single user profile
  const getsingleuserinfo = async (e)=>{  
    console.log("reload - single user function");
    setload(true)

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
      // console.log("READ-single users = ", data);
      function isCherries(i) { 
        return i.email == user.name;
      }
      setmydata(data.find(isCherries)); 

      // console.log("mydata")
      // console.log(mydata);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
  }

  //update
  const [updateuser, setupdateuser] = useState({
    _id:"6288711ce8fd2d6f21e228c4",
    fname: "", 
    lname: "", 
    blood: "", 
    phoneno: "", 
    email: "", 
    pass: "", 
    last_donated:"", 
    city:"",
    country:"",
    area:"",  
    country:"", 
    pucit:""
  })

  //use signle state hooks to handle all input values
  let att_name, att_value;
  const handleinput = (e) => {
    console.log("handle input");

    att_name = e.target.name;
    att_value = e.target.value;

    setupdateuser({ ...updateuser, [att_name]: att_value })
    console.log("updated user state = ", updateuser);
  }

  const save_update  = async (e)=>{
    console.log("updating");    
    const data = await axios.put("http://localhost:5000/user/profileupdate",updateuser);

      console.log("data = "  )
      console.log(data);
  
      if(data.status == 422 || !data)
      {
        window.alert("PUT- invalid reg");
      }
      else{
       console.log("PUT- valid reg ");
      }
      // getsingleuserinfo(); 
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
              <span class="text-black-50">{mydata.email}</span><span> </span>
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
                        <input type="text" class="form-control" placeholder="first name" name="" value={mydata.fname}/>
                    </div>
                    <div class="col-md-6">
                        <label class="labels">Last Name <sm>(public)</sm></label>
                        <input type="text" class="form-control" placeholder="surname" name="" value={mydata.lname}/>
                    </div>

                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label class="labels">Member Id <sm>(public)</sm></label>
                            <input type="text" class="form-control" placeholder="first name"  value={mydata._id}/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Blood Group <sm>(public)</sm></label>
                            <input type="text" class="form-control" value={mydata.blood} placeholder="in captals" name=""/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Pucitian <sm>(public)</sm></label>
                            <input type="text" class="form-control" placeholder="yes or no" name=""/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Pucit Roll No <sm>(private)</sm></label>
                            <input type="text" class="form-control" placeholder="in captals"/>
                        </div>

                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">Email  <sm>(private)</sm></label>
                            <input type="text" class="form-control" value={mydata.email} placeholder="enter active email"/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Password  <sm>(private)</sm></label>
                            <input type="password" class="form-control" placeholder="at least 8 characters" />
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Phone No  <sm>(private)</sm></label>
                            <input type="text" class="form-control" placeholder="Active number" />
                        </div>

                    </div>
                    <div class="row mt-3">

                        <div class="col-md-6">
                            <label class="labels">Area <sm>(public)</sm></label>
                            <input type="text" class="form-control" placeholder="Your Muhala Name"/>
                        </div>
                        <div class="col-md-6">
                            <label class="labels">City <sm>(public)</sm></label>
                            <input type="text" class="form-control" placeholder=" Your City"/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Country <sm>(public)</sm></label>
                            <input type="text" class="form-control" placeholder="Your Country"/>
                        </div>
                    </div>
                    
                    <button className='btn btn-green' onClick={() => setState({ isPaneOpen: true })}>
                      Edit
                    </button>


                    <SlidingPane
                      className="some-custom-class"
                      overlayClassName="some-custom-overlay-class"
                      isOpen={state.isPaneOpen}
                      title="Edit your Details"
                      onRequestClose={() => {
                        // triggered on "<" on left top click or on outside click
                        setState({ isPaneOpen: false });
                      }}>

                  <div class="row mt-2">
                    <div class="col-md-6">
                        <label class="labels">First Name <sm>(public)</sm></label>
                        <input type="text" class="form-control" placeholder="first name" name="fname" onChange={handleinput}/>
                    </div>
                    <div class="col-md-6">
                        <label class="labels">Last Name <sm>(public)</sm></label>
                        <input type="text" class="form-control" placeholder="surname" name="lname" onChange={handleinput}/>
                    </div>

                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label class="labels">Blood Group <sm>(public)</sm></label>
                            <input type="text" class="form-control" onChange={handleinput} placeholder="in captals" name="blood"/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Pucitian <sm>(public)</sm></label>
                            <input type="text" class="form-control" placeholder="yes or no" name="pucit" onChange={handleinput}/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Pucit Roll No <sm>(private)</sm></label>
                            <input type="text" class="form-control" placeholder="in captals" onChange={handleinput}/>
                        </div>

                        <div class="col-md-12">
                            <label class="labels">Email  <sm>(private)</sm></label>
                            <input type="text" class="form-control" onChange={handleinput} placeholder="enter active email"/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Password  <sm>(private)</sm></label>
                            <input type="password" class="form-control"  onChange={handleinput} placeholder="at least 8 characters" />
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Phone No  <sm>(private)</sm></label>
                            <input type="text" class="form-control" onChange={handleinput} placeholder="Active number" />
                        </div>

                    </div>
                    <div class="mt-5 text-center">
                        <button class="btn-green btn" type="button" onClick={save_update}>Update Profile</button>
                    </div>
                </div>
      </SlidingPane>
     
   
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



        
