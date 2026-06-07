import Parent from './Pages/Parent'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './ComponentS/Contact'
import Service from './Components/Service'
import {Routes,Route} from 'react-router-dom'
import Navbar from "./pages/Navbar"
import Counter from './pages/Counter'
import Effect from './pages/Effect'

const App = () => {
  return (
    //Fragment tag
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/parent' element={<Parent/>}></Route>
      <Route path='/useState' element={<Counter/>}></Route>
      <Route path='/useEffect' element={<Effect/>}></Route>
    </Routes>
    </>
  )
}

export default App