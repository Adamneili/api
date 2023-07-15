import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Userlist = () => {
    const[list,setList]=useState([])

useEffect(() => {   
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res=>setList(res.data))
.catch(err=>console.log(err))
    }
 , []);
 console.log(list)
 
  return (
    <div>
      {list.map((user) =>  <div > {user.name} </div> )}
    </div>
  )
}

export default Userlist
