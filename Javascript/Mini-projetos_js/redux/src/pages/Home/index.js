import React, {useState, useEffect} from 'react';
import api from '../../services/api'

export default function Home() {
  const[trips,setTrips] =useState([])
  useEffect(()=>{

    async function loadApi(){
      const response = await api.get('trips')
      setTrips(response.data)
      

    }
    loadApi()


  },[])
 return (
   <div>
       <div className="box">
         {trips.name(trip =>(
           <li key={trip.id}>
             <img src={trip.name} alt={trip.title}/>
             <strong>{trip.title}</strong>

           </li>
         ))}

       </div>
   </div>
 );
}