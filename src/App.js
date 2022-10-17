import "./App.scss";
import Topbar from "./Components/Topbar/Topbar";
import Intro from "./Components/Intro/Intro";
// import Portfolio from "./Components/Portfolio/Portfolio"
import Works from "./Components/Works/Works";
// import Internship from "./Components/Internship/Internship";
import Contact from "./Components/Contact/Contact";
import { useState } from "react";
import Menu from "./Components/Menu/Menu";
import Skills from "./Components/Skills/Skills";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        {/* <Portfolio/> */}
        <Works />
        {/* <Internship/> */}
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
