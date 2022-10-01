import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Intro">Home</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Works">Works</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#Internship">Internship</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
