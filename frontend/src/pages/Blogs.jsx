import axios from 'axios'
import React, { useEffect,useState} from 'react'
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState();
    const sendRequest = async ()=>{
    const res = await axios.get("http://localhost:5000/api/blog").catch((e)=>console.log(e));
    const data = await res.data;
    return data;
  } 
  useEffect(() => {
    sendRequest().then(data=>setBlogs(data.blogs))
    },[]);
  console.log(blogs);
  return (
    <div className='pt-[10vh] flex pb-[4vh]  min-w-screen justify-center' > {/* bg-blue-500 */}
     <div className='flex w-[50%] justify-center flex-col'>{/* bg-green-300 */}
      {blogs && blogs.map((blog,index)=>(
        <Blog key={index} title={blog.title} description={blog.description} imgUrl={blog.imgUrl} userName={blog.user.name}/>
      ))}
     </div>
    </div>
  )
}

export default Blogs