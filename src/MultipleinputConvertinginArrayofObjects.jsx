import React, { useState } from 'react'

const MutliConvertingArr = () => {
   const [name,SetName]=useState('');
   const [fatherName,SetFatherName]=useState('');
   const [Email,SetEmail]=useState('');
   const [Country,SetCountry]=useState('');
   const [PhoneNum,SetPhoneNum]=useState('0');

   const [formDataArray, setfromDataArray]=useState([]);
   const handleSubmit = (e) => {
    e.prevent.Default();
    const newEntry = {
        name, 
        fatherName, 
        Email, 
        Country, 
        PhoneNum
    }
    setfromDataArray([...formDataArray, newEntry]);
    SetName('');
    SetFatherName('');
    SetEmail('');
    SetCountry('');
    SetPhoneNum('0')
   }
    return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg ">
      <form >
        <input type='text' placeholder='First Name' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
        value={name} onChange={(e)=>SetName(e.target.value)}></input>
          <br></br>  
        <input type='text' placeholder='Last Name' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        value={fatherName} onChange={(e)=>SetFatherName(e.target.value)}></input>
         <br></br>  
        <input type='email' placeholder='Email' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        value={Email} onChange={(e)=>SetEmail(e.target.value)}></input>
          <br></br>  
        <input type='text' placeholder='Country' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        value={Country} onChange={(e)=>SetCountry(e.target.value)}></input>
          <br></br>  
      </form>
    </div>
  )
}

export default MutliConvertingArr
