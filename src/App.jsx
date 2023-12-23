import './App.css';
import { Routes,Route} from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome.jsx'
import City from './pages/City/City.jsx'
import SubCity from './pages/City/SubCity.jsx';
function App() {
  return(
    <Routes>
   <Route
    path='/'
    element={<Welcome/>
    }/>
    <Route path='/:city' element={<City/>}/>
    <Route path='/:city/:subcity' element={<SubCity/>}/>
    </Routes>
  )
}

export default App
