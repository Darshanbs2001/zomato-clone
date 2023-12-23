import './App.css';
import { Routes,Route} from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome.jsx'
import City from './pages/City/City.jsx'
import SubCity from './pages/City/SubCity.jsx';
import Investor from './pages/Investor/Investor';
import Login from './pages/Login/Login';
import AddRestaurant from './pages/AddRestaurant/AddRestaurant'
import Signup from './pages/Signup/Signup';
function App() {
  return(
    <Routes>
   <Route
    path='/'
    element={<Welcome/>
    }/>
    <Route path='/Investor-relations' element={<Investor/>} />
    <Route path='/Add-restaurant' element={<AddRestaurant/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Signup' element={<Signup/>} />
    <Route path='/:city' >
      <Route index element={<City/>}></Route>
      <Route path=':subcity' element={<SubCity/>}></Route>
      </Route>
    
    </Routes>
  )
}

export default App
