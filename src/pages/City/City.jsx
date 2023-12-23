import {useParams ,Link,Route} from 'react-router-dom';
import SubCity from './SubCity';
const City = () => {
  let {city}=useParams();
  return (
    <div>
    {city} 
    
        
        <Link to={`./belur`}>subcity</Link>

    </div>
  )
}

export default City
