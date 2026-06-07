import Parent from './Pages/Parent'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Service from './Components/Service'
import Navbar from './pages/Navbar'
import Counter from './pages/Counter'

const App = () => {
  return (
    //Fragment tag
    <>
    <Navbar/>
    <h1>Hello World!!</h1>
    <h1>Hello World!!</h1>
    <Parent/>
    <Home/>
    <About/>
    <Contact/>
    <Service/>
    <Counter/>
    </>
  )
}

export default App