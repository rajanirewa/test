'use client'
import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}
const Navbar = () => {
  const [blog , setBlog] = useState<BlogCategory[]>([]);
  
  async function blogCategory(){
    const blogCategoryData =await fetch ('https://tradable.codeandgrow.net/api/api-get-category');
    const data = await blogCategoryData.json();
    setBlog(data.categoryList);
  }
 
  useEffect (()=>{
    blogCategory();
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  },[])


 
  const [state,setState] = useState(true)
  return (
                             
    <header className= "d-flex align-items-center position-absolute w-100">
      <nav className="navbar navbar-expand-lg navbar-light w-100 animatable fadeInDown">
      <div className="container">
      <Link href="/" className="navbar-brand" >
        <img src="/logo.png" alt="logo" />
        <span>trade:able</span>
        </Link>              
        <button className="navbar-toggler" onClick={()=>setState(!state)}>
        { state ?  <span className="navbar-toggler-icon"></span> :<Image   src="/cross.png" alt="Close menu" width={20} height={20}/>
        }
        </button>
        <div className= {state ? "collapse navbar-collapse justify-content-end" : "justify-content-end" }id='navbarTogglerDemo03' onClick={()=>setState(!state)}>
        <span className="navbar-toggler-icon-close "  ></span>
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item text-white">
              <Link href="/about"  className="nav-item-link text-white">About Us</Link>
            </li>
            <li className="nav-item">
              <Link href="/community" className="nav-item-link text-white">Community</Link>
            </li>
            <li className='nav-item'>
            <div className="dropdown">
              {/* <button className="dropbtn" > */}
              <Link href="/blog" className="nav-item-link text-white">Blog</Link>
              <div className="dropdown-content">
              {
                blog.map((item)=>(<Link href={`/category/${item.slug}`} key={item.id}>{item.name}</Link>))
              }  
              </div>
             </div>
          </li>
            <li className="nav-item">
              <Link href="#" className="nav-item-button text-white  header_down_btn">Download App</Link>                    
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navbar