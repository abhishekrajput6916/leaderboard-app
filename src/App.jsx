import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Score from './pages/Score'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'



function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/scores' element={<Score />} />
    </Routes>
    <Toaster  position="bottom-center"/>
    <Footer/>
    </>
  )
}

export default App
