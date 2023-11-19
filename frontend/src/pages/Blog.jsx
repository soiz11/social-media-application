import React from 'react'

const Blog = ({title,description,imgUrl,userName}) => {
    const testimg = "https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg";
  return (
    <div className='py-2 my-2 shadow-custom w-[100%] rounded-lg px-6 bg-white'>
       <div className='font-medium text-[28px]'>{title}</div>
       <div className='flex rounded-lg overflow-hidden'>
        <img className="flex w-[100%] h-[100%] object-cover " src={testimg} alt="Description of the image" />
       </div>
       <div>{description}</div>
    </div>
  
  )
}

export default Blog