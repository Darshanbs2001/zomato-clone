import {useParams} from 'react-router-dom';
const City = () => {
  let {city}=useParams();
  return (
    <div>
    {city} 
    </div>
  )
}

export default City
