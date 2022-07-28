import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa"
import {TbCertificate} from "react-icons/tb"
import {VscFolderActive} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Month Training At AEC</small>
            </article>
            <article className='about__card'>
              <TbCertificate className='about__icon'/>
              <h5>Certificates</h5>
              <ul>
                <li>React Front To Back 2022</li>
                <li>50 Projects 50 days</li>
              </ul>
            </article>
            <article className='about__card'>
              <VscFolderActive className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quo itaque aperiam non repellendus placeat nobis esse ut quasi maxime amet dolorum molestiae natus odio libero doloribus, alias ipsam officia.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About