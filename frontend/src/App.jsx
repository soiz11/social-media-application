import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import Auth from './pages/Auth'
import Blogs from './pages/Blogs'
import UserBlogs from './pages/UserBlogs'
import BlogDetail from './pages/BlogDetail'
import AddBlog from './pages/AddBlog'
import Header from './components/Header'
import { useSelector } from 'react-redux';


const App = () => {
  const isLoggedIn = useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  return (
   <>
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Auth/>}/>
      <Route exact path="/blogs" element={<Blogs/>}/>
      <Route exact path="/myblogs" element={<UserBlogs/>}/>
      <Route exact path="/myblogs/:id" element={<BlogDetail/>}/>
      <Route exact path="/blogs/add" element={<AddBlog/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App

