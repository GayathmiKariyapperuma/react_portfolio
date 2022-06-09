import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a
          href="https://www.instagram.com/gsk_creations_edits/"
          target={"blank"}
        >
          <BsInstagram className="social" />
        </a>
        <a
          href="https://www.facebook.com/gayathmisanudini.kariyapperuma.5/"
          target={"blank"}
        >
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="https://gskariyapperuma.medium.com/" target={"blank"}>
          {" "}
          <BsMedium className="social" />
        </a>

        <a
          href="https://www.youtube.com/channel/UCmh6HnJgdCuYkMENGT0Tt_g"
          target={"blank"}
        >
          <TiSocialYoutube className="social" />
        </a>

        <a href="https://github.com/GayathmiKariyapperuma" target={"blank"}>
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
