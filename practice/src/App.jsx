
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Adminpage from './components/Adminpage'
import BookingAccess from './privateroutes/BookingAccess'
import Signup from './components/Signup'
import {Routes,Route} from "react-router-dom"
import Bookingpage from './components/Bookingpage'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/admin' element={<Adminpage/>}></Route>
      <Route path='/booking' element={<Bookingpage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
      
      
     
    </>
  )
}

export default App
