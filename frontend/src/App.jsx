import './App.css'
import Admin from './AdminPanel/Admin'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Users from './AdminPanel/Users'
import { Routes,Route } from 'react-router-dom'
import Games from './AdminPanel/Games'
import Downloads from './AdminPanel/Downloads'
import Reviews from './AdminPanel/Reviews'
import Earnings from './AdminPanel/Earnings'
import Contact from './Components/Contact'
import Wishlist from './Components/Wishlist'
import Cart from './Components/Cart'

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/admin/users' element={<Users/>}/>
      <Route path='/admin/games' element={<Games/>}/>
      <Route path='/admin/downloads' element={<Downloads/>}/>
      <Route path='/admin/reviews' element={<Reviews/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/admin/earnings' element={<Earnings/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
