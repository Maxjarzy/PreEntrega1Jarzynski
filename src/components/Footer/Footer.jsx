import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/Maxjarzy" target="_blank" rel="noopener noreferrer">
        <FiGithub />
      </a>
      <a href="https://www.linkedin.com/in/maximiliano-jarzynski/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </footer>
  );
};
