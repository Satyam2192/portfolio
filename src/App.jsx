import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;




// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import {
//   About,
//   Contact,
//   Experience,
//   Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   StarsCanvas,
// } from "./components";
// // all styles className="relative z-0 bg-primary"

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes >
//         <Route path="/" element={<Hero />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/tech" element={<Tech />} />
//         <Route path="/works" element={<Works />} />
//         <Route path="/feedbacks" element={<Feedbacks />} />
//         <Route path="/contact" element={<Contact />} />

        
//       </Routes>
//       <StarsCanvas className="relative z-0" />
//     </BrowserRouter>
//   );
// };

// export default App;
