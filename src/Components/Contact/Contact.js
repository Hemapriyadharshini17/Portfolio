import emailjs from "emailjs-com";
import { useRef } from "react";
import "./Contact.scss";

export default function Contact() {
  const form = useRef(null);
  // const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "Hema17",
      "template_ckkclbb",
      e.target,
      "HTxuNqGdyQnfsbxx3"
    );
    e.target.reset();
    alert("Mail sent Succesfully!");
    // .then(res=>{
    //   console.log(res)
    // }
    // )
    // .catch(err=>console.log(err))
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/Contactme.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
          <textarea name="msg" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
