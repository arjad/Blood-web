import React, { useEffect, useState , useHistory} from 'react';
import AOS from "aos";
import Axios from "axios";
import "./posts.css";
import Save from "../../assets/save.png";
import Avatar from "../../assets/avatar.png";
import Footer from '../../common/footer/footer';
import Swal from 'sweetalert2';
import Underline from "../../assets/underline.png";

function Posts() 
{
  useEffect(()=>{
    AOS.init({duration:3000});
    gettdataback();
  },[])
  const [search, setsearch] = useState("all")
  const [filtercity,setfiltercity] = useState("");
  const [filterpucit, setfilterpucit] = useState("");  

  useEffect(()=>{
    console.log("search ");
    console.log(search,filtercity,filterpucit);
  },[search,filtercity,filterpucit])

  const[pucitcheck,setpucitcheck] =useState("no")
  const handlepucitcheck = (event) => {
    setpucitcheck(event.target.value)
    if(pucitcheck === "yes")
    {
      // console.log(pucitcheck)
      document.getElementsByClassName("roll-input")[0].classList.remove("roll-input-show")

    }
    else{
      // console.log(pucitcheck);
      document.getElementsByClassName("roll-input")[0].classList.add("roll-input-show")

    }
  }

  // const history = useHistory();
  const [product, setProduct] = useState({
    patient_blood:"",patient_name:"",pucit_roll:"",mobile_no:"",email:"",patient_address:"",patient_city:"",hospital_name:"",

  })

  const [allposts , setallposts] = useState([]); 
  const [load, setload] = useState();

  //updated values
  const[updated_food_name, setupdated_food_name] = useState('');
  const[updated_food_price,setupdated_food_price] = useState('');

  // console.log("loading = " , load);

  //use signle state hooks to handle all input values
  let att_name, att_value;
  const handleinput = (e) =>{
    att_name = e.target.name;
    att_value= e.target.value;
    setProduct({...product, [att_name]:att_value })
    console.log("post state = " , product);
  }


  //////////
  ///show data 
  const gettdataback = async (e)=>{  

    setload(true)

    //getting response from api (or mongo db as both have same data)
    fetch("http://localhost:5000/posts/read")
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
      console.log("READ-   All DB = ", data);
      setallposts([...data])

    })
    .catch((error) => console.error("FETCH ERROR:", error));
  }



  /////////
  /// create data 
  const PostData = async (e)=>{
    e.preventDefault();
    //object destructring
    const {patient_blood,patient_name,pucit_roll,mobile_no,email,patient_address,patient_city,hospital_name } = product;
   
    if(!patient_blood || !patient_name || !mobile_no || !email || !patient_address || !email || !patient_address) 
    {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error',
        text: "Please Fill All Fields",
        showConfirmButton: false,
        timer: 1500
      })
      return
    }
    //post to server address
    const res = await fetch("http://localhost:5000/posts/insert",{
      method:"POST",
      mode: 'cors',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({patient_blood,patient_name,pucit_roll,mobile_no,email,patient_address,patient_city,hospital_name })
    })
  
    const data = await res.json();
     if(data.status === 422 || !data)
     {
       Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Post not Saved',
        text: "Check All Connection",
        showConfirmButton: false,
        timer: 1500
      })

     }
     else{
      console.log("POST- valid reg ");
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Post is Saved',
        text: "You will be contacted when donor is available",
        showConfirmButton: false,
        timer: 1500
      })

     }
     gettdataback();
  }


  ////////
  /// edit update (front end to backend)
  let updatehandle = async (food_id) =>{
    // console.log("id = ", food_id);

    const data = await Axios.put("http://localhost:5000/posts/update",{
    id :food_id,
    updated_food_name:updated_food_name,
    updated_food_price:updated_food_price
    });

    if(data.status === 422 || !data)
    {
      window.alert("PUT- invalid reg");
    }
    else{
     console.log("PUT- valid reg ");
    }
    
    gettdataback(); 
  }



  ///////////////
  /// delete  
  let deletehandle = async (id) =>{
    console.log("DELETE");
      // console.log("id = ", food_id);

      const data = await Axios.delete(`http://localhost:5000/posts/delete/${id}`);
    
        if(data.status === 422 || !data)
        {
          window.alert("DELETE- invalid reg");
        }
        else{
         console.log("DELETE- valid reg ");
        }
        
        gettdataback();
   
  }

  return(
    <div>
        <div className="login-root post-div">
          <div className="box-root ">
            <div className='row'> 
              <div className='col-lg-6 col-sm-12 right-ani bg-transparent'>
                <div className="app">
                  <div class="title">
                    <div class="title-inner">
                      <div class="cafe">
                        <div class="cafe-inner">Post &</div>
                      </div>
                      <div class="mozart">
                        <div class="mozart-inner">Save Life</div>
                      </div>
                    </div>
                  </div>

                  <div class="image">
                    <img src='https://images.unsplash.com/photo-1616362355051-6a9f8c434fff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzE0MTYzNQ&ixlib=rb-1.2.1&q=80&w=800&h=600' alt=''/>
                  </div>
                </div>

              </div>         

                <div className="col-lg-6 col-sm-12 bg-transparent p-5">
                    <h3>Add New Post</h3>                   
                      <form method='POST' id="stripe-login">
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Recipient Name</label>
                        <input value={product.patient_name} onChange={handleinput} type="text" placeholder='Full Name' name="patient_name" required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Are You PUCIT Student </label>
                        <label class="r1">No
                          <input type="radio" value="no" checked={pucitcheck === 'no'} onChange={handlepucitcheck} name="radio"/>
                          <span class="checkmark"></span>
                        </label>
                        <label class="r1">Yes
                          <input type="radio" value="yes" checked={pucitcheck === 'yes'} onChange={handlepucitcheck} name="radio"/>
                          <span class="checkmark"></span>
                        </label>
                        <input className='field roll-input' placeholder='10 character PUCIT roll number' value={product.pucit_roll} onChange={handleinput} type="text" name="pucit_roll"/>
                      
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Blood Group</label>
                        <select name="patient_blood" value={product.patient_blood} onChange={handleinput}>
                          <option value="A+">A+</option>
                          <option value="AB+">AB+</option>
                          <option value="B-">B-</option>
                          <option value="B+">B+</option>
                          <option value="O-">O-</option>
                          <option value="O+">O+</option>
                          <option value="AB-">AB-</option>
                        </select>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Mobile No</label>
                        <input value={product.mobile_no} onChange={handleinput} type="number" name="mobile_no" placeholder='with active whats app' required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Email</label>
                        <input value={product.mobile_no2} onChange={handleinput} type="email" name="email" placeholder='active email' required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="patient_address">Recipient Address</label>
                        <input value={product.patient_address} onChange={handleinput} type="text" name="patient_address" placeholder='Short Address (area of residence)' required/>
                      </div>
                      
                      <div className="field padding-bottom--24">
                        <label htmlFor="patient_address">Recipient City</label>
                        <select name="patient_city" onChange={handleinput} required>
                          <option value="" disabled selected>Select The City</option>
                          <option value="Islamabad">Islamabad</option>
                          <option value="Lahore">Lahore</option>
                          <option value="Karachi">Karachi</option>
                          <option value="Bahawalpur">Bahawalpur</option>
                          <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                          <option value="Faisalabad">Faisalabad</option>
                          <option value="Gujranwala">Gujranwala</option>
                          <option value="Gujrat">Gujrat</option>
                          <option value="Jhelum">Jhelum</option>
                          <option value="Kasur">Kasur</option>
                          <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                          <option value="Sargodha">Sargodha</option>
                          <option value="Sheikhupura">Sheikhupura</option>
                          <option value="Sialkot">Sialkot</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="field padding-bottom--24">
                        <label htmlFor="hospital_name">Hospital Name</label>
                        <input value={product.hospital_name} onChange={handleinput} type="text" name="hospital_name" placeholder='Where blood transfusion is expected' required/>
                      </div>
                      <div className="submit-btn d-flex justify-content-center lign-items-center">                       
                        <button  type="submit" onClick={PostData} name="submit" class="noselect save-btn">
                          <span class='text'>Save</span>
                          <img className='save-btn-img' src={Save}/>
                        </button>
                        <input className='reset-btn' value="Clear" type="reset" onClick={()=>{setProduct('')}}/>


                      </div>

                    </form>
                    
                </div>
            </div>

            {/* /////////////// */}
            {/* show all db data */}
	          
            <h2 className='my-3 text-center'> Posts</h2>

            {/* //filter data */}
            <div className='post_search bg-white'>
                <div className="heading_donors">
                  <h2>Filter Requests</h2>
                  <img src={Underline}/>
                </div>

                <div class="mt-4">
                    <select onChange={(e)=>setsearch(e.target.value)} name="bg" id="bg">
                      <option value="" disabled selected>Select Blood Group</option>
                      <option value="all">All</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>

                    <select onChange={(e)=>setfiltercity(e.target.value)} name="Location" id="Location" required>
                      <option value="" disabled selected>Select The City</option>
                      <option value="all">All</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Bahawalpur">Bahawalpur</option>
                      <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Gujranwala">Gujranwala</option>
                      <option value="Gujrat">Gujrat</option>
                      <option value="Jhelum">Jhelum</option>
                      <option value="Kasur">Kasur</option>
                      <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                      <option value="Sargodha">Sargodha</option>
                      <option value="Sheikhupura">Sheikhupura</option>
                      <option value="Sialkot">Sialkot</option>
                      <option value="other">Other</option>
                    </select>

                    <select onChange={(e)=>setfilterpucit(e.target.value)} name="bg" id="bg">
                      <option value="" disabled selected>You are from PUCIT</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>

                    <button onClick={gettdataback} className="btn filter-btn" type="button">Filter</button>
                </div>
              </div>



            <br/>

            <div className='all-pro-div container mb-5 '>
              
              <button class="btn-green btn mx-auto" onClick={gettdataback}>
    	      		<img class="icon" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png"/> <p>Reload</p>
    	        </button>
              <section className='d-flex justify-content-center flex-wrap '>
              {load ?<div id="loader-wrapper">
                        <div id="loader"></div>
                        <div class="loader-section section-left"></div>
                        <div class="loader-section section-right"></div>
                    </div> : allposts.filter((val)=>{
                      console.log("saearch = " + search);
                if(val.patient_blood == search.toString() || search == "all")
                {
                  console.log("bg filter");

                  return val;
                }
                if(val.patient_city == filtercity.toString() || filtercity =="all")
                {
                  console.log("city filter");
                  return val;
                }
                // else if(val.pucit.includes(search.toString()))
                // {
                //   return val;
                // }
              }).map((val,index)=>{
                    
                return(
                  <div class="cards m-3 p-3">
                    <h2 className='text-center'>{val.patient_name}</h2><br/>
                    <p>PUCIT Roll:<span>{val.pucit_roll}</span></p>
                    <p>Blood Group<span>{val.patient_blood}</span></p>
                    <p>Mobile1 :<span>{val.mobile_no}</span></p>
                    <p>Email:<span>{val.email}</span></p>
                    <p>Blood Group:<span>{val.patient_blood}</span></p>
                    <p>Address:<span>{val.patient_address}</span></p>
                    <p>Recipient City:<span> {val.patient_city}</span></p>
                    <p>Hospital Name:<span>{val.hospital_name}</span></p>
                </div>
              )
                })
              }
              </section>
              </div>
                       
              </div>
        </div>
      <Footer />

      </div>

  )
}

export default Posts;