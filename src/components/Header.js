import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='Header'>
       <h3 className='Title'>
        Gafarillo
        </h3> 
        
        <ul className='Links'>
         <li className='list active'>Home</li>
            <li className='list'>Instagram</li>
            <li className='list'>Youtube</li>
            <li className='list'>Services</li>
        
        </ul>
        <button className='btn'>
            Download CV
        </button>
       
    </div>
  )
}

export default Header