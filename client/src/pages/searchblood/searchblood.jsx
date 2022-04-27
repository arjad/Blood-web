import {React,useEffect,useState} from 'react'
import Footer from "../../common/footer/footer";
import Underline from "../../assets/underline.png";
import "./searchblood.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from "react-tooltip";


export default function Searchblood() 
{
  const [load, setload] = useState();
  const [search, setsearch] = useState("all");
  const [filtercity,setfiltercity] = useState("all");
  const [pucitcheck, setpucitcheck] = useState("yes");

  const [copy,setcopy] = useState(false)
  const [copytext,setcopytext] =useState("Click To Copy")

  let sr_no = 0;
  useEffect(()=>{
    if(copy)
    {
      setcopytext("Copied")
      setTimeout(()=>{ setcopytext("Click To Copy")}, 3000);
      setcopy(false)
    }
  },[copy])

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

                    <select name="Location" id="Location" required>
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

                    <select name="bg" id="bg">
                      <option value="" disabled selected>You are from PUCIT</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
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
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope='col'>Blood Group</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
              {/* table row here */}
              {load ?<div id="loader-wrapper">
                      <div id="loader"></div>
                      <div class="loader-section section-left"></div>
                      <div class="loader-section section-right"></div>
                    </div> :allusers.filter((val)=>{
                if(val.patient_blood == search.toString() || search == "all")
                {
                  // console.log("bg filter");
                  return val;
                }
                
                }).filter((val)=>{
                if(val.patient_city == filtercity.toString() || filtercity =="all")
                {
                  // console.log("city filter");
                  return val;
                }
              }).filter((val)=>{
                if(pucitcheck==="yes")
                {
                  // console.log("pucit check");
                  console.log(val);
                  return val;
                }

              }).map((val,key)=>{ 
            return(
                  
              <tr>
                <th scope="row">{sr_no + 1}</th>
                <td>{val.fname} {val.lname}</td>
                <td>{val.blood}</td>
                <CopyToClipboard text={val.email}
                  onCopy={() => setcopy(true)}>
                  <td data-tip data-for="copying" className='email-copy'>{val.email}
                    <ReactTooltip id="copying" className='bg-dark' place="bottom" effect="float">
                      {copytext}
                    </ReactTooltip>
                  </td>
                </CopyToClipboard>
    
                <td data-tip data-for="calling" >
                  <a href={`tel:${val.phoneno}`}>
                    {val.phoneno}
                  </a>
                  <ReactTooltip id="calling" className='bg-dark' place="bottom" effect="float">
                      Click To Call
                  </ReactTooltip>
                </td>
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
