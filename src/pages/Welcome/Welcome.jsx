import {Link} from 'react-router-dom';
import bgimg from '../../assets/front-page-image.avif'
import './welcome.css';
const Welcome = () => {
  return (
    <div class='Welcome'>

      
     <nav class='navigation-bar'>
     <div className="bg-img">
        <img src={bgimg} alt="" />
      </div>
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
  )
}

export default Welcome
