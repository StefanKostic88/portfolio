import styled from "styled-components";

export const SectionProjectStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  max-width: 104rem;
  width: 100%;
  min-height: 100vh;
  color: ${({ theme }) => theme.textLight};
 
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    @media ${({ theme }) => theme.breakpoints.lg} {
      gap: 2rem;
      };
    @media(max-width: 925px){
      padding-top: 6rem;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
     };
    @media ${({ theme }) => theme.breakpoints.md} {
      gap: 2rem;
    };
    @media(max-width: 620px){
      grid-template-columns: 1fr;
    };
    @media ${({ theme }) => theme.breakpoints.xsm} {
    justify-items: center;
    };
`;

export const ProjectCardStyled = styled.figure`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: ${({ theme }) => theme.border};
  width: 33rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  transition: all 200ms linear;
  cursor: pointer;
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 28rem;
  height: 29rem;
  };
  @media(max-width: 925px){
    width: 35rem;
  height: 30rem;
   };
   @media ${({ theme }) => theme.breakpoints.md} {
    width: 29rem;
  height: 27rem;
  };
  @media(max-width: 620px){
    width: 42rem;
    height: 30rem;
   };
   @media ${({ theme }) => theme.breakpoints.xsm} {
    width: 90%;
    height: 27rem;
    };
&:hover {
 transform: scale(1.02);
 box-shadow: ${({ theme }) => theme.boxShadowhover};
}

  header {
    height: 55%;
    padding: 2rem 1rem 0 1rem;
    object-fit: cover;
    object-position: center;
    img {
      width: 100%;
    }
  }
  footer {
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
}
`;

export const ProjectHeadingStyled = styled.h5`
  color: ${({ theme }) => theme.textColor.light};
  font-size: 1.75rem;
  text-shadow: ${({ theme }) => theme.color.primary} 5px -2px 25px;
  // margin-bottom: 1.75rem;
  margin-bottom: 1.25rem;
  // margin-top: 1.25rem;
  margin-top: 1.75rem;
`;

export const ProcjetUlStyled = styled.ul`
  display: flex;
  justify-contnt: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;

  svg {
    width: 2.75rem;
    height: 2.75rem;
    fill: ${({ theme }) => theme.color.primary};
  }
`;

export const ProcjetButtonStyled = styled.button`
  background-color: black;
  color: ${({ theme }) => theme.textColor.light};
  text-transform: uppercase;
  text-shadow: ${({ theme }) => theme.color.primary} 5px -2px 25px;
  cursor: pointer;
  border: ${({ theme }) => theme.border};
  padding: 0.8rem 1.25rem;
  font-size: 1.4rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  position: relative;

  span:nth-child(1) {
    position: absolute;
    top: -1px;
    right: 0;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  &:hover span:nth-child(1),
  &:focus span:nth-child(1) {
    top: -1px;
    right: 0;
    height: 2px;
    width: 100%;
    transform: scaleX(1);
    transform-origin: right;
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  span:nth-child(2) {
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
    width: 2px;
    transform-origin: right;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleY(0);
    // transform-origin: top center;
    transform-origin: center bottom;
    transition: transform 200ms linear;
  }
  &:hover span:nth-child(2),
  &:focus span:nth-child(2) {
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
    width: 2px;
    transform-origin: right;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleY(1);
    // transform-origin: center bottom;
    transform-origin: top center;
  }
  span:nth-child(3) {
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 200ms linear;
  }
  &:hover span:nth-child(3),
  &:focus span:nth-child(3) {
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 2px;
    width: 100%;

    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 200ms linear;
  }
  span:nth-child(4) {
    position: absolute;
    left: -1px;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms linear;
  }
  &:hover span:nth-child(4),
  &:focus span:nth-child(4) {
    position: absolute;
    left: -1px;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleY(1);
    transform-origin: bottom;
    transition: transform 200ms linear;
  }
`;
