import {React,useState} from 'react'
import Footer from "../../common/footer/footer";
import Underline from "../../assets/underline.png";
import "./searchblood.css";
import Avatar from "../../assets/avatar.png";

export default function Searchblood() 
{
  const [search, setsearch] = useState("")
  const [load, setload] = useState();

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

            <div className='container '>
              <div className='search_bars bg-white'>
                <div className="heading_donors">
                  <h2>Find Donors</h2>
                  <img src={Underline}/>
                </div>
                <div class="input-group mt-5">
                  <input onChange={(e)=>setsearch(e.target.value)} className="form-control" type="text" class="form-control" placeholder="Search by Patient's name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                  <div class="input-group-append">
                    <button onClick={getusers} class="btn filter-btn" type="button">Refresh</button>
                  </div>
                </div>
              </div>
            <div className="searchblood-div">
              
              {/* card here */}
              {allusers.filter((val)=>{
                console.log("all users = ", allusers);
                if(search == "")
                {
                  //return every item in array
                  return val;
                }
                else if(val.fname.toLowerCase().includes(search.toLowerCase()))
                {
                  return val;
                }
                else if(val.lname.toLowerCase().includes(search.toLowerCase()))
                {
                  return val;
                }
                else if(val.city.toLowerCase().includes(search.toLowerCase()))
                {
                  return val;
                }
                else if(val.country.toLowerCase().includes(search.toLowerCase()))
                {
                  return val;
                }
              }).map((val,key)=>{ 
            return(
              <div class="card m-4 bg-light text-white">
                <div class="imgBx">
                    <img src={Avatar} alt="no img"/>
                  </div>
                  <div class="contentBx">
                    <h2>{val.fname} {val.lname}</h2>
                    <div class="color">
                      <h3>{val.address}</h3>
                      <h3>Mobile1 :{val.phoneno}</h3>
                      <h3>Mobile2:{val.phoneno2}</h3>
                      <h3>Country:{val.country}</h3>
                    </div>

                    <a href="#">View Profile</a>
                  </div>
                </div>
              )})}     

            </div>
            </div>
        

            <Footer />
        </div>
    )
}
