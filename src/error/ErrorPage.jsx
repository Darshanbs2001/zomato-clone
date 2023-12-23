import './error.css';
import {useRouteError} from 'react-router-dom';
const ErrorPage = () => {
  const error=useRouteError();
console.log(error);
  return (
    <div className="error-box">
    something went wrong
    <i>{error.statusText||error.message}</i>
    </div>
  )
}

export default ErrorPage
