import {Routes , Route} from 'react-router-dom'
import Auth from './components/Auth'
import { useState } from 'react'
import HomePage from './components/HomePage'
function App() { 
  const [isAuth,setisAuth] = useState(localStorage.getItem('isauth')|| false)
  return (
    <>
    <header className='header'>
            <a href="#" className="logo">Connector</a>
        </header>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      {
        !isAuth&&(
          <Route path='/auth' element={<Auth />}/>)
      }
    </Routes>
    
    </>
  )
}

export default App
