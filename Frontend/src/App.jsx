import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from './common/landing.jsx'
import Login from './common/login.jsx'
import Signup from './common/signup.jsx'
import Devdashboard from './developers/Devdashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
     <Routes>

          <Route path='/' element={<Landing />}/>
          <Route path='/Login' element={< Login/>}/>
          <Route path='/Signup' element={< Signup/>}/>
          <Route path='/Devdashboard' element={< Devdashboard/>}/>



     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
