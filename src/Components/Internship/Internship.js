// import "./Internship.scss";

// export default function Internship() {
//   const data = [
//     {
//       id: 1,
//       name: "Lenovo pvt.Ltd",
//       title: "In-plant training",
//       // img:
//       //   "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//       icon: "assets/twitter.png",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
//     },
//     {
//       id: 2,
//       name: "General connectors",
//       title: "Manufacturing and Testing",
//       // img:
//       //   "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//       icon: "assets/youtube.png",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
//       featured: true,
//     },
//     {
//       id: 3,
//       name: "Ifortis world wide",
//       title: "Hr Trainee",
//       // img:
//       //   "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//       icon: "assets/linkedin.png",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
//     },
//   ];
//   return (
//     <div className="Internship" id="Internship">
//       <h1>Internships</h1>
//       <div className="container">
//         {data.map((d) => (
//           <div className={d.featured ? "card featured" : "card"}>
//             <div className="top">
//               <img src="assets/right-arrow.png" className="left" alt="" />
//               <img
//                 className="user"
//                 src={d.img}
//                 alt=""
//               />
//               <img className="right" src={d.icon} alt="" />
//             </div>
//             <div className="center">
//               {d.desc}
//             </div>
//             <div className="bottom">
//               <h3>{d.name}</h3>
//               <h4>{d.title}</h4>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

