import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { Practices } from './Practices.jsx'
import Profile from './components/Profile.jsx'
<<<<<<< HEAD
import { EventHandling } from './components/EventHandling.jsx'
import { EventProps } from './components/EventProps.jsx'
import { EventPropagation } from './components/EventPropagation.jsx'
import { State } from './components/hooks/state.jsx'
import { DerivedState} from './components/hooks/DerivedState.jsx'
import { LiftingTheStateUp } from './components/LiftingTheStateUp.jsx'
import { ToggleSwitch } from './components/ToggleSwitch.jsx'
=======
>>>>>>> d48129672e54e9c2a1c219d1092e2893cf661fb2

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practices/> */}
    {/* <Profile/> */}
<<<<<<< HEAD
     {/* <EventHandling/> */}
     {/* <EventProps/> */}
     {/* <EventPropagation/> */}
     {/* <State/> */}
     {/* <DerivedState/> */}
     {/* <LiftingTheStateUp/> */}
     <ToggleSwitch/>
=======
>>>>>>> d48129672e54e9c2a1c219d1092e2893cf661fb2
  </StrictMode>,
)
