import React, { useEffect, useState , useHistory} from 'react';
import AOS from "aos";
import Axios from "axios";
import "./posts.css";
import Save from "../../assets/save.png";
import Avatar from "../../assets/avatar.png";
import Footer from '../../common/footer/footer';
function Posts() 
{
  useEffect(()=>{
    AOS.init({duration:3000});
  },[])

  // const history = useHistory();
  const [product, setProduct] = useState({
    // productname:"", productprice:"",productcat:"", bestoffer:"",productimg:""
    patient_blood:"",patient_name:"",patient_age:"",when_needed:"",mobile_no:"",mobile_no2:"",blood_units_needed:"",patient_address:"",hospital_name:"",purpose:""

  })

  const [allproducts , setallproducts] = useState([]); 
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
      setallproducts([...data])

    })
    .catch((error) => console.error("FETCH ERROR:", error));
  }



  /////////
  /// create data 
  const PostData = async (e)=>{
    e.preventDefault();

    //object destructring
    // const {productname, productprice, productcat, bestoffer, productimg} = product;
    const {patient_blood,patient_name,patient_age,when_needed,mobile_no,mobile_no2,blood_units_needed,patient_address,hospital_name,purpose } = product;
    //post to server address
    const res = await fetch("http://localhost:5000/posts/insert",{
      method:"POST",
      mode: 'cors',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({patient_blood,patient_name,patient_age,when_needed,mobile_no,mobile_no2,blood_units_needed,patient_address,hospital_name,purpose })
    })
  
    const data = await res.json();
     if(data.status === 422 || !data)
     {
       window.alert("POST- invalid reg");
     }
     else{
      console.log("POST- valid reg ");
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
        <div className="login-root">
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
                        <label htmlFor="email">Enter Patient Name</label>
                        <input value={product.patient_name} onChange={handleinput} type="text" name="patient_name" required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Enter Patient age</label>
                        <input value={product.patient_age} onChange={handleinput} type="text" name="patient_age" required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">When Needed </label>
                        <input value={product.when_needed} onChange={handleinput} type="date" name="when_needed" required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Enter Product Catagory</label>
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
                        <label htmlFor="email">Enter mobile</label>
                        <input value={product.mobile_no} onChange={handleinput} type="number" name="mobile_no" placeholder='+92 302...' required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Enter 2nd mobile</label>
                        <input value={product.mobile_no2} onChange={handleinput} type="number" name="mobile_no2" placeholder='+92 302...' required/>
                      </div>
                      
                      <div className="field padding-bottom--24">
                        <label htmlFor="blood_units_needed">Enter blood units</label>
                        <input value={product.blood_units_needed} onChange={handleinput} type="text" name="blood_units_needed" placeholder='true or false' required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="patient_address">Enter Patient add</label>
                        <input value={product.patient_address} onChange={handleinput} type="text" name="patient_address" placeholder='true or false' required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="hospital_name">Enter hospital</label>
                        <input value={product.hospital_name} onChange={handleinput} type="text" name="hospital_name" placeholder='true or false' required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="purpose">Enter Purpose</label>
                        <input value={product.purpose} onChange={handleinput} type="text" name="purpose" placeholder='true or false' required/>
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
            <h2 className='my-3 text-center'> Posts
            <button class="btn-green btn" onClick={gettdataback}>
	        		<img class="icon" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png"/> <p>Reload</p>
	          </button>
	          </h2>

            <div className='all-pro-div container d-flex justify-content-center flex-wrap mb-5 '>
              
              {load ?<div id="loader-wrapper">
                        <div id="loader"></div>
                        <div class="loader-section section-left"></div>
                        <div class="loader-section section-right"></div>
                    </div> : allproducts.map((val,index)=>{
                    
                return(
                  <div class="card m-4 bg-light text-white">
                <div class="imgBx">
                    <img src={Avatar} alt="no img"/>
                  </div>
                  <div class="contentBx">
                    <h2>{val.patient_name}</h2>
                    <div class="color">
                      <h3>{val.address}</h3>
                      <h3>Mobile1 :{val.phoneno}</h3>
                      <h3>Mobile2:{val.phoneno2}</h3>
                      <h3>Blood Group: {val.patient_blood}</h3>
                      <h3>Country:{val.country}</h3>
                    </div>

                    <a href="#">View Profile</a>
                  </div>
                </div>
              )
                })
              }
              </div>
                       
              </div>
        </div>
      <Footer />

      </div>

  )
}

export default Posts;