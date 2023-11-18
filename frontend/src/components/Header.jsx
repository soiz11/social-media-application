import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';

const Header = () => {
  const [isAllBlogActive, setIsAllBlogActive] = useState(true);
  const [isMyBlogActive, setIsMyBlogActive] = useState(false);
  const isLoggedIn = useSelector(state=>state.isLoggedIn);

  
  const allBlogClicked = () => {
    if (!isAllBlogActive) {
        setIsMyBlogActive(false);
        setIsAllBlogActive(!isAllBlogActive);
    }
  }
  const myBlogclicked =() =>{
    if (!isMyBlogActive) {
      setIsAllBlogActive(false);
      setIsMyBlogActive(!isMyBlogActive);
   }
 }
  return (
    <div className=' flex h-[6vh] items-center {/*bg-gray-100} bg-white text-black  justify-center w-[100vw] shadow-lg fixed z-10'>
        <div className=' w-[95vw] px-[auto] flex justify-between h-[4vh] items-center'>
            <div className='flex text-xl font-medium md:text-lg'>Blogger world</div>
            { isLoggedIn &&
              <div className='flex'>
              <Link onClick = {allBlogClicked} className={isAllBlogActive?"px-5 text-red-800 text-lg md:text-sm md:px-2":"px-5 text-black text-lg md:text-sm md:px-2"} to="/blogs">All blogs</Link>
              <Link onClick={myBlogclicked} className={isMyBlogActive?"px-5 text-red-800 text-lg md:text-sm md:px-2":"px-5 text-black text-lg md:text-sm md:px-2"} to="/myblogs">My blogs</Link>
            </div>
            }
            <div className='flex h-full items-center  justify-end'>
                { !isLoggedIn &&
                  <>
                  <Link className='border-[2px] border-transparent hover:border-solid hover:border-[2px] hover:border-red-700 text-black hover:text-red-700 h-full items-center flex mx-1 px-6  lg:px-4 rounded-sm text-lg md:text-sm font-medium duration-500 ' to="/auth">login</Link>
                  <Link className='border-[2px] border-transparent hover:border-solid hover:border-[2px] hover:border-red-700 text-black hover:text-red-700 h-full items-center flex mx-1 px-6  lg:px-4 rounded-sm  text-lg md:text-sm font-medium duration-500 ' to="/auth">SignUp</Link>
                  </>
                }
                
                { isLoggedIn &&
                  <Link className='border-[2px] border-transparent hover:border-solid hover:border-[2px] hover:border-red-700  text-black hover:text-red-700 h-full items-center flex mx-1 px-6  lg:px-4 rounded-smtext-lg md:text-sm font-medium duration-500 '  to="/auth">Logout</Link>
                  }
            </div>
        </div>
    </div>
  )
  }

export default Header;
