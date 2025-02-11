import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import ScoreBoard from './pages/ScoreBoard'

function App() {
  return (
    <div className='relative min-h-[100vh] max-w-[1600px] mx-auto'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/scoreboard' element={<ScoreBoard />} />
    </Routes>
    <Toaster  position="bottom-center"/>
    <Footer/>
    </div>
  )
}

export default App
