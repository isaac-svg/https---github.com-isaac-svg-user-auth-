import React from "react";
import databiz from "../assets/images/client-databiz.svg";
import audiophile from "../assets/images/client-audiophile.svg";
import maker from "../assets/images/client-maker.svg";
import meet from "../assets/images/client-meet.svg";
import heroDesktop from "../assets/images/image-hero-desktop.png";
import heroMobile from "../assets/images/image-hero-mobile.png";
import { useEffect } from "react";
import { useState } from "react";
const Content = ({ smallScreen }) => {
  const [imagePicker, setImagePicker] = useState("");
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setImagePicker(window.innerWidth);
    });
    return window.removeEventListener("resize", (e) => {
      setImagePicker("");
    });
  }, [window.innerWidth]);
  return (
    <section className="content">
      <div className="leftContent">
        <div className="details">
          <h1>
            Make <br /> remote work
          </h1>
          <div className="leftContent_contentWrapper">
            <p className="description">
              Get your team in sync, no matter your location. Streamline
              processes,create team rituals and watch productivity soar.
            </p>
            <button className="learnMore">Learn more</button>
          </div>
        </div>
        <div className="contentFooter">
          <img src={databiz} alt="" />
          <img src={audiophile} alt="" />
          <img src={maker} alt="" />
          <img src={meet} alt="" />
        </div>
      </div>
      <div className="rightContent">
        <div className="imageContainer">
          <img src={!smallScreen ? heroDesktop : heroMobile} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Content;
