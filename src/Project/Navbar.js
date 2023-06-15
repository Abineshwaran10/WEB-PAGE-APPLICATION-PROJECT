import React from 'react'
import './Stud.css'
import { Link } from 'react-router-dom';
import logoimg from'./images/logoimg.png';
import {BsSearch} from  'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
function Navbar() {
  return (
    <div className='nav'>
      <img  className='Logo'src={logoimg} alt='logo'/>
      <h2 className='edu' >Education</h2> 
      <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/study">Study</Link></li>
        <li><a>Blog</a></li>
    <li><a>Certificate</a></li>
      </ul>
    </div>
  <div className='butn'>
    <button className='search'><BsSearch/></button>
  <button className='Login'><RiContactsLine/>  Login / Register</button>
    </div>
    </div> 
  )
}

export default Navbar;