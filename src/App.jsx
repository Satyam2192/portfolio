import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
// import styled from "styled-components";

// =========
// const Container = styled.div`
//   scroll-snap-type: y mandatory;
//   scroll-behavior: smooth;
//   overflow-y: auto;
//   scrollbar-width: none;
//   &::-webkit-scrollbar{
//     display: none;
// bg-[#663399]
//   }
// `;
// =====

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="relative z-o bg-primary snap-y snap-mandatory scroll-smooth overflow-auto scrollbar-hide snap-center">
        <div className="h-[100vh] bg-[#339941] h-100 bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-o">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
