import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla animi
        aspernatur sequi exercitationem nam similique quae minima, molestiae hic
        accusamus!
      </p>
      <buton type="button" className="custom__button">
        Explore Menu
      </buton>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome image" />
    </div>
  </div>
);

export default Header;
