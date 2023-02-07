import { useState, useEffect } from "react";
import React from "react";
import {
  SectionHeroStyled,
  HeadingPrimaryStyled,
  HeadingSecundaryStyled,
  HeadingTerciaryStyled,
  IconsListStyled,
  LinksStyled,
  IconsStyled,
  AboutIconStyled,
  HeadingLinesStyled,
  AnimatedBackgroundStyled,
} from "../../styles/HeroStyles/HeroStyles";

import { ImGithub, ImInstagram, ImLinkedin, ImArrowDown } from "react-icons/im";
import AnimatedHeroBacground from "../../../assets/imgs/4NB4.gif";

const infoArr = [
  { infoName: "Download cv", infoHref: "#about" },
  { infoName: "My work", infoHref: "projects" },
];

const iconsArr = [
  { iconName: ImGithub, href: "https://github.com/StefanKostic88" },
  { iconName: ImInstagram, href: "https://www.instagram.com/cupri885" },
  {
    iconName: ImLinkedin,
    href: "https://www.linkedin.com/in/stefan-kostic-8866a625",
  },
];

const HeroSection = React.forwardRef((props, ref) => {
  const [mainHeadingIsLighted, setMainHeadingIsLighted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMainHeadingIsLighted(true);
    }, 1500);
  }, []);

  return (
    <SectionHeroStyled id="hero" ref={ref}>
      <HeadingSecundaryStyled>Hello, i'm</HeadingSecundaryStyled>
      <HeadingPrimaryStyled light={mainHeadingIsLighted}>
        Stefan
      </HeadingPrimaryStyled>
      <HeadingTerciaryStyled>
        Self
        <HeadingLinesStyled>
          <span></span>
        </HeadingLinesStyled>
        tought
        <br />
        front
        <HeadingLinesStyled>
          <span></span>
        </HeadingLinesStyled>
        end developer
      </HeadingTerciaryStyled>
      {infoArr.map((el, index) => (
        <LinksStyled key={index} to={el.infoHref} smooth duration={300}>
          {el.infoName}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </LinksStyled>
      ))}
      <IconsListStyled>
        {iconsArr.map((el, index) => (
          <li key={index}>
            <IconsStyled href={el.href} target="_blank">
              <el.iconName />
            </IconsStyled>
          </li>
        ))}
      </IconsListStyled>
      <AboutIconStyled to="about" smooth duration={300}>
        <ImArrowDown />
      </AboutIconStyled>
      <AnimatedBackgroundStyled>
        <img src={AnimatedHeroBacground} alt="Hero Section" />
      </AnimatedBackgroundStyled>
    </SectionHeroStyled>
  );
});

export default HeroSection;
