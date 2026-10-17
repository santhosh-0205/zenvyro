import React from 'react'
import './landing.css'
import Zenvyro from './zenvyrologo.png'

function landing() {
  return (
   <>


   <header className='topbar'>
    <img src={Zenvyro} alt="Project-Logo" className='project-logo-icon' />
    <h2 className='topbar-head'>ENVYRO</h2>
    <ul className='topbar-content-head'>

     <div id='topbar-content-options'>
       <select className='topbar-content-option'>
        <option value="" ><li><a href="">Home</a></li></option>
      </select>
      <select className='topbar-content-option'>
         <option value="" ><li><a href="">Theme</a></li></option>
      </select>
      <select className='topbar-content-option'>
        <option value="" ><li><a href="">Explore</a></li></option>
      </select>
     </div>
    
    </ul>
     <input type="search" placeholder='Search....'  className='top-searchbar'/>
    

    <div>

      <button className=' topbar-login-btn'>Login</button>

         <button className=' topbar-signup-btn'>Sign up</button>
    </div>

   </header>
   
   
   </>
  )
}

export default landing