import {useParams} from 'react-router-dom';
const SubCity = () => {
  let {subcity}=useParams();
  return (
    <div>
    {subcity} 
    </div>
  )
}

export default SubCity;
