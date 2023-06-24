import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          <h1>Request TV shows or movies</h1> <br/> Have a TV show or movie you'd like to see
          on Flix movies?<br/> us know about it below. Wondering why a title is no
          longer available? <br/>Visit Why do TV shows and movies leave Flix movies? <br/>For
          help finding a title, visit How do I find TV shows and movies on
          Flix movies?
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a
              href="https://github.com/amrendra-chaudhry-21?tab=repositories"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://twitter.com/Amrendra_43"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/amrendra-chaudhary/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
