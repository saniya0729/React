import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { Practices } from './Practices.jsx'
import Profile from './components/Profile.jsx'
<<<<<<< HEAD
import { ReactUseEffect } from './components/useEffect/index.jsx'
import { UseEffectChallenge } from './components/useEffect/useEffectChallenge.jsx'
import { Cleanup } from './components/useEffect/Cleanup.jsx'
=======
import { EventHandling } from './components/EventHandling.jsx'
import { EventProps } from './components/EventProps.jsx'
// import {state} from "./components/hooks/usestate/state.jsx"
import { EventPropagation } from './components/EventPropagation.jsx'
import { DerivedState} from './components/hooks/DerivedState.jsx'
import { LiftingTheStateUp } from './components/LiftingTheStateUp.jsx'
import { ToggleSwitch } from './components/ToggleSwitch.jsx'

import { RegistrationForm } from './components/hooks/Forms/Registration.jsx'
>>>>>>> 8eb25c84df702bfb0ed05b4f56337ec151c7bcc5

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practices/> */}
    {/* <Profile/> */}
<<<<<<< HEAD
    {/* <ReactUseEffect/> */}
    {/* <UseEffectChallenge/> */}
    <Cleanup/>
=======
     {/* <EventHandling/> */}
     {/* <EventProps/> */}
     {/* <EventPropagation/> */}
     {/* <State/> */}
     {/* <DerivedState/> */}
     {/* <LiftingTheStateUp/> */}
     {/* <ToggleSwitch/> */}
     <RegistrationForm/>
>>>>>>> 8eb25c84df702bfb0ed05b4f56337ec151c7bcc5
  </StrictMode>,
)
