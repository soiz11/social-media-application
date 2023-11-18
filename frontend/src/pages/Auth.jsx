import React, { useState,useEffect } from 'react'
import patimg from "../images/pattern.jpg";
import briimg from "../images/brick.jpg";

const Auth = () => {
   const [isSignUp, setIsSignUp] =useState(false);
   const [inputs, setInputs] = useState({
    name:"",
    email:'',
    password:""
   });
   const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
   }
   const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputs)
   }
   
  {/*/const [currentImage, setCurrentImage] = useState(0);

   const imgArray = [patimg, briimg];
 
   const changeImage = () => {
     setCurrentImage((prevIndex) => (prevIndex + 1) % imgArray.length);
   };
 
   useEffect(() => {
     // Call the changeImage function every 5 seconds (5000 milliseconds)
     const intervalId = setInterval(changeImage, 5000);
 
     // Cleanup the interval on component unmount
     return () => clearInterval(intervalId);
   }, []);*/}

   {/*<img src={imgArray[currentImage]}*/}
 
  
  return (
    <div className='flex w-[100%] justify-center bg-gray-50 py-auto h-[100vh] items-center relative top-0 left-0 '>
        <img src={patimg} alt='' className='absolute h-[100%] w-[100%] object-cover fade-in '/>
        <form onSubmit={handleSubmit} className='bg-gray-100 pt-10 pb-12 px-14 w-[400px] h-[fit-content] rounded-xl shadow-xl border-[2px] border-red-700 backdrop-blur bg-opacity-20'>
          <h1 className='text-center text-[60px] pb-4 '>{isSignUp?"Sign Up":"Login"}</h1>
            { isSignUp &&
              <div className='flex flex-col'>
              <label className='text-[18px]'>Full Name</label>
              <input name="name" onChange={handleChange} value={inputs.name} type='text' className='mb-1 py-[6px] px-1 rounded-sm outline-none shadow' required/>
            </div>
            }
            <div className='flex flex-col'>
              <label className='text-[18px]'>Username</label>
              <input name="email" onChange={handleChange} value={inputs.email} type='email' className='mb-1 py-[6px] px-1 rounded-sm outline-none shadow' required/>
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px]'>Password</label>
              <input name="password" onChange={handleChange} value={inputs.password} type='password' className='mb-1 py-[6px] px-1 rounded-sm outline-none shadow' required/>
            </div>
            <button type="submit" className='bg-red-700 text-white w-[100%] py-[6px] rounded-sm mt-5 text-[20px] font-medium'>Submit</button>
            <h1 onClick={()=>{setIsSignUp(!isSignUp);}} className='bg-transparent text-red-700 pt-[18px] pb-[6px]  text-[16px] font-medium text-center cursor-pointer'>Change to {isSignUp?"Login":"SignUp"}</h1>
        </form>
      
    </div>
  )
}

export default Auth