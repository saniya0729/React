import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { Practices } from "./Practices.jsx";
import Profile from "./components/Profile.jsx";
import { ReactUseEffect } from "./components/hooks/useEffect/index.jsx";
import { UseEffectChallenge } from "./components/hooks/useEffect/useEffectChallenge.jsx";
import { Cleanup } from "./components/hooks/useEffect/Cleanup.jsx";
import { EventHandling } from "./components/EventHandling.jsx";
import { EventProps } from "./components/EventProps.jsx";
// import {state} from "./components/hooks/usestate/state.jsx"
import { EventPropagation } from "./components/EventPropagation.jsx";
import { DerivedState } from "./components/hooks/DerivedState.jsx";
import { LiftingTheStateUp } from "./components/LiftingTheStateUp.jsx";
import { ToggleSwitch } from "./components/ToggleSwitch.jsx";

import { RegistrationForm } from "./components/hooks/Forms/Registration.jsx";
import { RegistrationFormReact } from "./components/hooks/Forms/RegistrationReact.jsx";
import { LoginForm } from "./components/hooks/Forms/LoginForm.jsx";
import { ContactForm } from "./components/hooks/Forms/contactForm.jsx";
import { FetchApi } from "./components/hooks/useEffect/FetchApi.jsx";
import { UseRef } from "./components/hooks/UseRef/index.jsx";
import { UseID } from "./components/hooks/UseId/UseId.jsx";
import { BioProvider } from "./components/ContextApi/index.jsx";
import { Home } from "./components/ContextApi/Home.jsx";
import { About } from "./components/ContextApi/About.jsx";
import { Services } from "./components/ContextApi/Services.jsx";
import { UseHook } from "./components/hooks/UseHook/usehook.jsx";
import { UseReducer } from "./components/hooks/UserReducer/UseReducer.jsx";
import { UseCallBackHook } from "./components/hooks/UseCallBackHook/Usecallbackhook.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practices/> */}
    {/* <Profile/> */}
    {/* <ReactUseEffect/> */}
    {/* <UseEffectChallenge/> */}
    {/* <Cleanup/> */}
    {/* <EventHandling/> */}
    {/* <EventProps/> */}
    {/* <EventPropagation/> */}
    {/* <State/> */}
    {/* <DerivedState/> */}
    {/* <LiftingTheStateUp/> */}
    {/* <ToggleSwitch/> */}
    {/* <RegistrationForm/> */}
    {/* <RegistrationFormReact/> */}
    {/* <LoginForm/> */}
    {/* <ContactForm/> */}
    {/* <RegistrationForm/> */}
    {/* <FetchApi/> */}
    {/* <UseRef/> */}
    {/* <UseID/> */}
    {/* <BioProvider>
      <Home />
      <About/>
      <Services/>
    </BioProvider> */}
    {/* <UseHook/> */}
    {/* <UseReducer/> */}
    <UseCallBackHook/>
  </StrictMode>
);
