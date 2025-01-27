
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import { Routes,  Route } from 'react-router-dom'
import Contact from './pages/contact/Contact'
import Location from './pages/location/Location'
import Footer from './components/footer/Footer'
import LogIn from './pages/login/LogIn'
import Detail from './pages/detail/Detail'
import Cart from './pages/cart/Cart'
import NotFound from './pages/notFound/NotFound'

function App() {

  return (
    <>
    {/* Header */}
      <Header />
      {/* Main */}
      <main className=' mb-[160px]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/product/detail/:id' element={<Detail/>}/>
          <Route path='*' element={<NotFound/>} />
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
