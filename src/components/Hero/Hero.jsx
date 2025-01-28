import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <h2>Hellow, My name is Gifar</h2>
        <p>I'm a Frontend Developer,and I'm still learning React</p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react.png" alt="" />
          </div>
          <img src="./assets/images/GIFARKASEP.jpg" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/css.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/js.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
