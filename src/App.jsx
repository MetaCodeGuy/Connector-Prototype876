import {Routes , Route, Link} from 'react-router-dom'
import Auth from './components/Auth'
import { useState } from 'react'
import HomePage from './components/HomePage'
function App() { 
  const [isAuth,setisAuth] = useState(localStorage.getItem('isauth')|| false)
  return (
    <>
    <header className='header'>
         <Link className='link logo' to='/'>Connector</Link>
         <div className="login-sec">
          <Link className='login-link' to='/auth'>Signin</Link>
         </div>
         <div className="profile">

         </div>

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
