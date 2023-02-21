import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Facts from "../pages/Facts";

import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function Layout() {
  return (
    <> 
      <Home />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
