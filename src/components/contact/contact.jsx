import "./contact.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.facebook.com/gayathmisanudini.kariyapperuma.5/"
          className="contact facebook"
          target={"blank"}
        >
          <BsFacebook className="icon" />
          <h2>
            Facebook <span>Gayathmi Sanudini Kariyapperuma</span>
          </h2>
        </a>

        <a
          href="https://wa.link/bywzv3"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            WhatsApp <span>+94 75 271 4122</span>
          </h2>
        </a>

        <a
          href="https://www.linkedin.com/in/gayathmi-sanudini-kariyapperuma/"
          className="contact linkedin"
        >
          <RiLinkedinBoxFill className="icon" />
          <h2>
            LinkedIn <span>Gayathmi Sanudini Kariyapperuma</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
