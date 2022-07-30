import React from 'react'
import "./footer.css"
import { ImFacebook2 } from "react-icons/im"
import { GrInstagram } from "react-icons/gr"
import { FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Mohammed Alfadl</a>

      <ul className='permalinks'>
      <li><a href="#"></a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/mohammed.alfadl.37"><ImFacebook2 /></a>
        <a href="https://www.instagram.com/mode_alf/"><GrInstagram /></a>
        <a href="https://twitter.com/AlfadlMohammed"><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Modealf Inc. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer