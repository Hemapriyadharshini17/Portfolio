import "./Skills.scss";

export default function Skills() {
  const data = [
    {
      id: 1,
      name: "FRONT-END",
      // img:
      //   "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.webefficient.agency%2Fthemes%2Fweb-efficient-2017%2Fassets%2Fimages%2Fog%2Fen%2Fservicii-implementare-frontend.png&imgrefurl=https%3A%2F%2Fwww.webefficient.agency%2Fservices%2Ffrontend-development&tbnid=OYTlPkkvsBkkjM&vet=12ahUKEwjKg53i6OH6AhUw9nMBHflLDcMQMygQegUIARDlAQ..i&docid=wPlu0yT995l8TM&w=5000&h=2626&q=frontend%20images&ved=2ahUKEwjKg53i6OH6AhUw9nMBHflLDcMQMygQegUIARDlAQ",
      // icon: "assets/Manager.png",
      desc:
        "ReactJS, HTML, CSS, NPM, MaterialUI, Flutter",
    },
    {
      id: 2,
      name: "BACK-END",
      // title: "Senior Web developer & TL",
      // img:
      //   "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/TL.png",
      desc:
        "NodeJS, ExpressJS, MongoDB, MySQL",
      featured: true,
    },
    {
      id: 3,
      name: "LANGUAGES",
      // title: "Junior Web developer & Tester",
      // img:
      //   "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "JavaScript, C, C++, Python",
    },
  ];
  return (
    <div className="skills" id="skills">
      <br/>
      <div className="bg"></div>
      <h1 style={{color:"white"}}>Skills</h1>
      <div className="container">

        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <h3>{d.name}</h3>
              {/* <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                // src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" /> */}
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              {/* <h4>{d.title}</h4> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

