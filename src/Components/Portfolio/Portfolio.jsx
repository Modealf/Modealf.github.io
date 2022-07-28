import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/RPG.png"
import IMG2 from "../../assets/Form.jpg"
import IMG3 from "../../assets/hoverboard.png"

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Password Generator</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Modealf/Password-Generator" className='btn' target="_blank">Github</a>
          <a href="https://github.com/Modealf/Password-Generator" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Input Form: Sign In Page</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Modealf/Form-Input" className='btn' target="_blank">Github</a>
          <a href="https://github.com/Modealf/Password-Generator" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Responsive Hover-Board </h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Modealf/HoverBoard" className='btn' target="_blank">Github</a>
          <a href="https://github.com/Modealf/Password-Generator" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio