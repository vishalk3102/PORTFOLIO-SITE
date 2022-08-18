import React, { useState, useEffect } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Loader from "./Components/Loader";

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
