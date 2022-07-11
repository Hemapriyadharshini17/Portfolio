import './App.scss';
import Topbar from "./Components/Topbar/Topbar"
import Intro from "./Components/Intro/Intro"
import Portfolio from "./Components/Portfolio/Portfolio"
import Works from "./Components/Works/Works"
import Testmonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
         <Intro/>
         <Portfolio/>
         <Works/>
         <Testmonials/>
         <Contact/>
      </div>
    </div>
  );
}

export default App;
