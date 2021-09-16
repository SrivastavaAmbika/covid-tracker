import React,{useEffect, useState} from 'react';


const Tracker = () => {
    const[data,sethata]= useState([]);

    const getCovidData = async() =>{
const res = await fetch('https://data.covid19india.org/data.json');
const actualData = await res.json();
console.log(actualData.statewise);
sethata(actualData.statewise);
    }
    useEffect(() => {
       getCovidData();
        
    }, [])
    return (
        <div>
            
            <div className="container-fluid mt-5 ">
                <div className="main-heading">
                    <h1 className="mt-5 text-center"><span className="font-weight-bold">India</span> covid tracker Statewise</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover ">
                        <thead className="table-dark">
<tr>
    <th>State</th>
    <th>Confirmed</th>
    <th>Recovered</th>
    <th>Death</th>
    <th>Active</th>
    <th>Updated</th>
</tr>
                        </thead>

{
    data.map((currElem,index)=>{
     return(
        <tr>
    <td>{currElem.state}</td>
    <td>{currElem.confirmed}</td>
    <td>{currElem.recovered}</td>
    <td>{currElem.deaths}</td>
    <td>{currElem.active}</td>
    <td>{currElem.lastupdatedtime}</td>
</tr>
     ) 
    })
}



                        
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Tracker
