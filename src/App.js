import React from "react";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Join from "./Components/Join";
import Plans from "./Components/Plans";
import Programs from "./Components/Programs";
import Reasons from "./Components/Reasons";
import Testimonians from "./Components/Testimonians";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonians />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
