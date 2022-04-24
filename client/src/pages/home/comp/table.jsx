import React from 'react'
import Underline from "../../../assets/underline.png";

export default function Table() 
{
    return (
        <div className="table-div shadow-lg container p-3"  data-aos="flip-up" data-aos-delay="100">
            <div className="heading_donors">
                <h2>Our Top Donors</h2>
                <img src={Underline}/>
            </div>
            <table className="table tables">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className='sr-col'>Sr #</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Mb. Number</th>
                    <th scope="col">Blood Group</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className='sr-col'>1</th>
                    <td><button className="donor_name btn btn-primary">Mark</button></td>
                    <td>DHA, Lahore</td>
                    <td>090078601</td>
                    <td>B+</td>
                  </tr>
                  <tr>
                    <th scope="row" className='sr-col'>2</th>
                    <td><button className="donor_name btn btn-primary">Jacob</button></td>
                    <td>Bahria Town, Lahore</td>
                    <td>090078601</td>
                    <td>O-</td>
                  </tr>
                  <tr>
                    <th scope="row" className='sr-col'>3</th>
                    <td><buttton className="donor_name btn btn-primary">Larry</buttton></td>
                    <td>Androon, Lahore</td>
                    <td>090078601</td>
                    <td>AB+</td>
                  </tr>
                  
                </tbody>
            </table>

            
        </div>
    )
}
