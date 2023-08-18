import React from "react";
import FooterLogo from "../assets/footer-logo.png";
import { MdOutlineArrowUpward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        <img src={FooterLogo} alt="" />
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a>
      <div className="footer__link--wrapper">
        <div>
          <a href="https://github.com/fnalviar">Github</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/nikka-alviar">LinkedIn</a>
        </div>
        <div>
          <a href="mailto:nikka_alviar@outlook.com">Email</a>
        </div>
        <div>
          <a href="/resume.pdf">Resume</a>
        </div>
      </div>
      <div>Copyright &copy; 2023 Nikka Alviar</div>
    </div>
  );
};

export default Footer;
