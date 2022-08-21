import React, { useState, useEffect } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Home/Hero";
import Navbar from "./Components/Home/Navbar";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";
import Loader from "./Components/Home/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);

  return (
    <>
      {loading === false ? (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
