import {
  SectionAboutStyled,
  AboutContainerStyled,
  AboutHeading,
  ParagraphStyled,
  ListStyled,
  PortfolioImageStyled,
  AnimatedBackgroundBottomLeftStyled,
  AnimatedBackgroundCenterStyled,
} from "../../styles/AboutStyles/AboutStyles";

import AnimatedBottom from "../../../imgs/2Mul.gif";
import AnimatedCenter from "../../../imgs/LCPT.gif";

import {
  DiSass,
  DiJavascript1,
  DiJqueryLogo,
  DiHtml5,
  DiCss3,
  DiReact,
  DiBootstrap,
  DiGitBranch,
} from "react-icons/di";

import portfolioImage from "../../../imgs/20190227_215526.jpg";

const textArr = [
  `My name is Stefan Kostic and I am a 34 year old who 
  fell in love with coding and taught himself how to do it.`,
  `Introduction to front end development sparked a passion that none
  of my previous professions ever did, a passion that drives me to
  learn more and made me decide to switch careers and pursue my
  dream to become a web developer. Since then I dedicate most of my
  time to study and practice code from various sources such as,
  Udemy courses, YouTube videos, books and everything else I find
  useful.`,
  `In the section below, You can see some of the projects I developed
  over the last year as a self-taught developer with no previous
  professional experience. Most of them are my own original ideas
  that I converted into a working application with technologies i am
  currently familiar with such as HTML5, CSS3, Sass, Bootstrap,
  Styled Components, JavaScript, jQuery and React.`,
];

const iconsArr = [
  <DiSass />,
  <DiJavascript1 />,
  <DiJqueryLogo />,
  <DiHtml5 />,
  <DiCss3 />,
  <DiReact />,
  <DiBootstrap />,
  <DiGitBranch />,
];

const AboutSection = () => {
  const generateParagraphs = textArr.map((el, index) => (
    <ParagraphStyled key={index}>{el}</ParagraphStyled>
  ));
  const generateIcons = iconsArr.map((el, index) => <li key={index}>{el}</li>);

  return (
    <SectionAboutStyled id="about">
      <AboutContainerStyled>
        <PortfolioImageStyled>
          <img src={portfolioImage} alt="portfolio-img" />
        </PortfolioImageStyled>
        <article>
          <div>
            <AboutHeading>About me...</AboutHeading>
            {generateParagraphs}
          </div>
          <ListStyled>{generateIcons}</ListStyled>
        </article>
        <AnimatedBackgroundBottomLeftStyled>
          <img src={AnimatedBottom} alt="" />
        </AnimatedBackgroundBottomLeftStyled>
        <AnimatedBackgroundCenterStyled>
          <img src={AnimatedCenter} alt="" />
        </AnimatedBackgroundCenterStyled>
      </AboutContainerStyled>
    </SectionAboutStyled>
  );
};

export default AboutSection;
