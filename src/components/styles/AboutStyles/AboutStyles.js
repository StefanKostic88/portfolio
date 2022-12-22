import styled from "styled-components";

export const SectionAboutStyled = styled.div`
  position: relative;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 104rem;
  width: 100%;
  min-height: 100vh;
  color: ${({ theme }) => theme.textLight};
  margin-top: 4.8rem;

  &::before {
    content: "";
    position: absolute;
    top: 2%;
    left: 0;
    width: 5px;
    height: 68%;
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 3px;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 7.5%;
    right: 0;
    width: 5px;
    height: 50%;
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 3px;
  }
`;

export const AboutHeading = styled.h3`
  position: relative;
  margin: 5rem 0 2rem 0;
  padding-left: 1.25rem;
  color: ${({ theme }) => theme.textColor.light};
  font-family: "Orbitron", sans-serif;
  text-transform: uppercase;
  text-shadow: ${({ theme }) => theme.boxShadow};

  @media${({ theme }) => theme.breakpoints.xsm} {
    font-size: 2.8rem;
  }

  &:before {
    position: absolute;
    content: "";
    top: 10%;
    left: 0;
    height: 80%;
    width: 0.75rem;
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 5px;
  }
`;

export const ParagraphStyled = styled.p`
  margin-bottom: 1.25rem;
  font-family: "Montserrat", sans-serif;
  // font-size: 1.8rem;
  font-size: 2.1rem;

  color: ${({ theme }) => theme.textColor.light};
  &:last-child {
    margin-bottom: 5rem;
    // margin-bottom: 0;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  svg {
    fill: ${({ theme }) => theme.color.primary};
    height: 4.5rem;
    width: 4.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    flex-wrap: wrap;
    gap: 0.35rem;
  }
`;

export const PortfolioImageStyled = styled.div`
  display: flex;
  // flex-direction: column;

  img {
    // width: 100%;
    height: 30rem;
    width: auto;
  }
`;

export const AboutContainerStyled = styled.article`
  position: relative;
`;

export const AnimatedBackgroundBottomLeftStyled = styled.div`
  position: absolute;
  top: 85%;
  left: -20%;
  z-index: -1;
  transform: translate(50%, -50%);
  img {
    width: 22rem;

    @media ${({ theme }) => theme.breakpoints.md} {
      display: none;
    }
  }
  &:after {
    position: absolute;
    content: "";
    background-color: rgba(0, 0, 0, 0.65);
    // background-color: red;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;

export const AnimatedBackgroundCenterStyled = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  z-index: -2;
  transform: translate(50%, -75%);
  img {
    width: 70rem;
    @media ${({ theme }) => theme.breakpoints.lg} {
      width: 50rem;
    }
    @media ${({ theme }) => theme.breakpoints.md} {
      width: 40rem;
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
      width: 30rem;
    }
    @media ${({ theme }) => theme.breakpoints.xsm} {
      width: 100%;
    }
  }
  &:after {
    position: absolute;
    content: "";
    background-color: rgba(0, 0, 0, 0.85);
    // background-color: red;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;
