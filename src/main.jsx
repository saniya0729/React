import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { Practices } from './Practices.jsx'
import Profile from './components/Profile.jsx'
import { ReactUseEffect } from './components/useEffect/index.jsx'
import { UseEffectChallenge } from './components/useEffect/useEffectChallenge.jsx'
import { Cleanup } from './components/useEffect/Cleanup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practices/> */}
    {/* <Profile/> */}
    {/* <ReactUseEffect/> */}
    {/* <UseEffectChallenge/> */}
    <Cleanup/>
  </StrictMode>,
)
