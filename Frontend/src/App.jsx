import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Routs,Route,BrowserRouter} from "react-router-dom";
import Landing from './common/landing'
import Login from './common/login'
import Signup from './common/signup'
import Devdashboard from './developers/Devdashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
          <Route path='/Dashboard' elements={< Landing/>}/>
          <Route path='/Login' elements={< Login/>}/>
          <Route path='/Signup' elements={< Signup/>}/>
          <Route path='/Devdashboard' elements={< Devdashboard/>}/>
     </Routes>
     
     
     
     </BrowserRouter>
    </>
  )
}

export default App
