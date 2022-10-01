import "./Intro.scss";
// import { init } from "ityped";
import { useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  //   useEffect(() => {
  //     init(textRef.current, {
  //       showCursor: true,
  //       backDelay: 1500,
  //       backSpeed:60,
  //       strings: ["Developer", "Designer", "Content Creator"],
  //     });
  //   }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Profile.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello World! I'm</h2>
          <h1>Hemapriyadharshini</h1>
          <h3>
            Web developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
