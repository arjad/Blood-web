import {React,useEffect,useState} from 'react'
import Footer from "../../common/footer/footer";
import Underline from "../../assets/underline.png";
import "./searchblood.css";
import badge from "../../assets/pu.png";

export default function Searchblood() 
{
  const [load, setload] = useState();
  const [search, setsearch] = useState("all");
  const [filterarea,setfilterarea] = useState("all");
  const [pucitcheck, setpucitcheck] = useState("both");

  let sr_no = 0;
  useEffect(()=>{
    getusers()
  },[])

  const [allusers , setallusers] = useState([]); 
  //////////
  ///show data 
  const getusers = async (e)=>{  

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
      console.log("READ-   All Users = ", data);
      setallusers([...data])
    })
    .catch((error) => console.error("FETCH ERROR:", error));
  }

    return (
        <div>
            <div className="wallpaper mb-5 container-fluid">
                <h1>Search For Blood</h1>
                <div className="earth"></div>
            </div>

            <div className='container'>
              <div className='search_bars bg-white'>
                <div className="heading_donors">
                  <h2>Find Donors</h2>
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

                    <select onChange={(e)=>setfilterarea(e.target.value)} name="Location" id="Location" required>
                      <option value="" disabled selected>Select The area</option>
                      <option value="all">All</option>
                      <option value="model town">Model Town</option>
                      <option value="dha">dha</option>
                      <option value="town ship">Town ship</option>
                      <option value="other">Other</option>
                    </select>

                    <select onChange={(e)=>setpucitcheck(e.target.value)} name="bg" id="bg">
                      <option value="" disabled selected>You are from PUCIT</option>
                      <option value="both">Both</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>

                    <button onClick={getusers} className="btn filter-btn" type="button">Filter</button>
                </div>
              </div>

            <div className="searchblood-div">
              <button onClick={getusers} class="btn-green btn mt-3" >
	        	  	<img class="icon" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png"/> <p>Reload</p>
	            </button>
	         
            <table class="table mt-3">
              <thead>
                <tr>
                  <th scope="col">Sr #</th>
                  <th scope="col">Name</th>
                  <th scope='col'>Blood Group</th>
                  <th scope="col">Area</th>
                  <th scope="col">Last Donated</th>
                  <th scope="col">Membership No</th>
                </tr>
              </thead>
              <tbody>
              {/* table row here */}
              {load ?<div id="loader-wrapper">
                      <div id="loader"></div>
                      <div class="loader-section section-left"></div>
                      <div class="loader-section section-right"></div>
                    </div> :allusers.filter((val)=>{
                if(val.blood == search.toString() || search == "all")
                {
                  return val;
                }
                
                }).filter((val)=>{
                if(val.area == filterarea.toLowerCase().toString() || filterarea =="all")
                {
                  // console.log("area filter");
                  return val;
                }
              }).filter((val)=>{
                if(pucitcheck =="both")
                {
                  return val;
                }
                if(val.pucit===pucitcheck)
                {
                  console.log("pucit check");
                  console.log(val);
                  return val;
                }
              }).map((val,key)=>{ 
            return(
                  
              <tr>
                <th scope="row">{key+1}
                {(val.pucit == "yes")? <img className='pubadge' src={badge}/> : <span></span>}
                </th>

                <td>{val.fname} {val.lname}</td>
                <td>{val.blood}</td>
                <td>{val.area}</td>
                <td>{val.last_donated}</td>
                <td>{val._id}</td>
                
              </tr>
              )})}     
              
              </tbody>
            </table>
            </div>
            </div>
        

            <Footer />
        </div>
    )
}
