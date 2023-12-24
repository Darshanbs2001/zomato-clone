import { useState } from 'react';
import {Link} from 'react-router-dom'
import './navbar.css';
import bgimg from '../../assets/front-page-image.avif';
export const Navbar = () => {
  const [navVisible,setNavVisible]=useState(false);
  return (
    <div className="navbar"> 
    <div className="bg-img">
        <img src={bgimg} alt="" />
      </div>
<span className="material-symbols-outlined" onClick={()=>setNavVisible(prev=>!prev)}>
menu
</span>
    {navVisible &&   
      
<div className='Welcome'>
      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" onClick={()=>setNavVisible(prev=>!prev)}/></svg>
     <nav className='navigation-bar'>
  
      <div className="header">  
      <div className="left"></div>
      <ul className="right">
        <li>
          <Link to='/Investor-relations'>Investor Relations</Link>
        </li>
        <li>
          <Link to='/Add-restaurant'>Add Restaurant</Link>
        </li>
        <li>
          <Link to='/Login'>Log In</Link>
        </li>
        <li>
          <Link to='/Signup'>Sign In</Link>
        </li>
      </ul>
      </div>
      </nav>    
    </div>
    }
    </div>
  )
}
