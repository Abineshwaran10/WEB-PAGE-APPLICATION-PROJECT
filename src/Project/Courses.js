import React from 'react'
import './Stud.css'
import lap1 from './images/lap1.jpg';
import lap2 from './images/lap2.jpg';
import lap3 from './images/lap3.jpg';
import subimage1 from'./images/subimage1.jpg';
import subimage2 from'./images/subimage2.jpg';
import subimage3 from'./images/subimage3.jpg';

function Courses() {
  return (
    <div className='our'>
        <h2 className='courses'>Our Courses</h2>
       <div> 
        <h1 className='popular'> Our Most<span> Popular</span> Course</h1>
        </div>
        <div className='all-course'>
        <button class="new-course">New Courses </button>
        <button class="feature-course">Feature Course</button>
        <button class="popular-course">Popular Course </button>
        </div>
       <div class="container1">
  <div class="column1">
    <img src={ lap1 } alt="pro"/>
    <div class="content1">
    <div class="profile1">
      <img src={subimage1} alt="Profile "/>
      <h4 className='name'>Mariya</h4>
      <h4 className='lesson'>16 Lessons</h4>
    </div>
    <p class="text1">The Compeleted Guide to Build RESTful API Application</p>
    <hr class="line"/>
    <p class="number">$45.00</p>
    
  </div>
  </div>
  <div class="column2">
    <img src={ lap2 } alt="pro"/>
    <div class="content2">
    <div class="profile2">
      <img src={subimage2} alt="Profile"/>
      <h4 className='name'>Tom Cruse</h4>
      <h4 className='lesson'>26 Lessons</h4>
    </div>
    <p class="text1">The Compeleted HTML & CSS Bootcamp 2023 Edition for you now</p>
    <hr class="line"/>
    <p class="number">$45.00</p>
  </div>
  </div>
  <div class="column3">
    <img src={ lap3 } alt="pro"/>
    <div class="content3">
    <div class="profile3">
      <img src={subimage3} alt="Profile"/>
      <h4 className='name'>Salena Gomez</h4>
      <h4 className='lesson'>25 Lessons</h4>
    </div>
    <p class="text1">Grow Personal Financial Security Thinking & Principles</p>
    <hr class="line"/>
    <p class="number">$45.00</p>
  </div>
  </div>
</div>
    </div>
  )
}
export default Courses;
