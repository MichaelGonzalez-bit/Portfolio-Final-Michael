import React from "react";
import "./FooterStyles.css";
import navIcon2 from '../../assets/img/nav-icon2.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Michael Gonzalez</h1>

        <div className="footer_social">
          <ul className="footer_list">
          <span className="navbar-text">
              <div className="social-icon">
                <a href="Javascript:window.open('https://github.com/MichaelGonzalez-bit')"><img src={navIcon2} alt="" /></a>
              </div>
            </span>
          </ul>
        </div>
        <span className="footer_copy">&#169;Michael All Rigths Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
