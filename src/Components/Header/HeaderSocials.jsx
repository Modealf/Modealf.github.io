import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/modealf-undefined-48a73b246/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Modealf" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/AlfadlMohammed" target="_blank"><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials