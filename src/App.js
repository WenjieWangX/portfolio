import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Education,
  Certificate,
  Hero,
  Navbar,
  NavSocialMedia,
  Tech,
  Projects,
  StarsCanvas,
  EarthCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="z-20 bg-black-200 fixed w-[150px] h-[150px] bottom-[20px] right-[20px] rounded-full">
          <EarthCanvas />
          <StarsCanvas />
        </div>
        <NavSocialMedia />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Tech />
        <Projects />
        <Certificate />
        <div className="relative z-0 bg-black-200">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
