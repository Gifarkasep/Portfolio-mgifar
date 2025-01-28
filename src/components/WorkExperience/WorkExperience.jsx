import React from "react";
import "./WorkExperience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { WORK_EXPERIENCE } from "../../utils/data";
import Slider from "react-slick";
import { useRef } from "react";

const WorkExperience = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRight = () => {
    sliderRef.current.slickNext();
  };
  const sliderLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="experience-container" id="experience">
      <h5>Work Experience</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={sliderRight}>
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="arrow-left" onClick={sliderLeft}>
          <span class="material-symbols-outlined">chevron_left </span>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default WorkExperience;
