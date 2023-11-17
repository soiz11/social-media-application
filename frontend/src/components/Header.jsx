import React from 'react'

const Header = () => {
  return (
    <div className=' flex  h-[6vh] items-center bg-gray-100 text-black  justify-center'>
        <div className=' w-[95vw] px-[auto] flex justify-between h-[4vh] items-center'>
            <div className='flex'>Header</div>
            <div className='flex h-full items-center  justify-end'>
                <div className='bg-blue-500 h-full items-center flex ml-3 px-6 rounded-sm'>login</div>
                <div className='bg-blue-700  h-full items-center flex ml-3 px-6 rounded-sm'>SignUp</div>
                <div className='bg-blue-900  h-full items-center flex ml-3 px-6 rounded-sm'>Logout</div>
            </div>
        </div>
    </div>
  )
}

export default Header;
