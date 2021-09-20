import React from "react";
import "./App.css";
// import * as THREE from "THREE";
// import Earth from "./Earth.js";//
import Header from "./Header.js";
import About from "./About.js";
import Tech from "./Tech.js";
import Art from "./Art.js";
import Network from "./Network.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1 class="font-serif text-6xl text-wave">illa island</h1>
      <p class="text-2xl text-sans text-shade bg-gradient-to-r from-wave to-pool">
        test gradient of text blah blah blah
      </p>
      <About />
      <Tech />
      <Art />
      <Network />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
