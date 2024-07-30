import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Model from "./components/Model.jsx";
import Features from "./components/Features.jsx";

import * as Sentry from "@sentry/react";
import HowItWorks from "./components/HowItWorks.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)
  return (
 <main className="bg-black">

     <Navbar/>
     <Hero/>
     <Highlights/>
     <Model/>
     <Features/>
     <HowItWorks/>
     <Footer/>

 </main>
  )
}

export default Sentry.withProfiler(App);
