import styled from "styled-components";

export const SectionStyled = styled.div`
  position: relative;

  // border: 3px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 104rem;
  width: 100%;
  // min-height: calc(95vh - 4.8rem);
  min-height: 100vh;
  color: ${({ theme }) => theme.textLight};
`;

export const FormSectionStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  min-height: 53rem;
  min-width: 50%;
  background-color: black;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  @media ${({ theme }) => theme.breakpoints.md} {
    min-width: 70%;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    min-width: 80%;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    min-width: 90%;
  }
  &::before {
    content: "";
    position: absolute;
    top: -1.5%;
    left: -1.5%;
    color: white;
    width: 103%;
    height: 103%;
    border: ${({ theme }) => theme.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};
    z-index: -1;
  }
`;

export const ContactHeadingPrimaryStyled = styled.h2`
  font-family: Orbitron, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColor.dark};
  text-shadow: ${({ theme }) => theme.boxShadow};
  font-weight: 400;
  // font-size: 2.8rem;
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 3.5rem;
`;
export const ContactHeadingSecundaryStyled = styled.h6`
  font-family: Orbitron, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColor.dark};
  // font-size: 1.8rem;
  font-size: 2.2rem;
  // margin-bottom: 2.5rem;
  margin-bottom: 5rem;
`;

export const ContactUlStyled = styled.ul`
  display: flex;
  align-self: stretch;
  justify-content: space-around;
  margin-top: 4rem;
  gap: 2rem;
  a {
    font-family: Orbitron, sans-serif;
    letter-spacing: 2px;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.primary};
    transition: text-shadow 300ms;
    &:hover,
    &:focus {
      outline: none;
      text-shadow: ${({ theme }) => theme.textShadow};
    }
  }
`;

//FORM CONTROLL

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

export const ContactButtonStyled = styled.button`
  font-family: Orbitron, sans-serif;
  text-transform: uppercase;
  align-self: center;
  padding: 0.55rem 1.5rem;
  font-size: 1.65rem;
  letter-spacing: 1px;
  border: ${({ theme }) => theme.border};
  background-color: black;
  border-radius: ${({ theme }) => theme.borderRadius};
  // color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.textColor.dark};
  cursor: pointer;
  transition: opacity 300ms;
  &:focus,
  &:hover {
    outline: none;
    box-shadow: ${({ theme }) => theme.boxShadow};
    color: ${({ theme }) => theme.textColor.light};
  }
  &:disabled {
    opacity: 0;
    color: #762020;
    border: 1px solid #762020;
    cursor: not-allowed;
    &:hover {
      outline: none;
      color: #981919;
      box-shadow: none;
      box-shadow: 0 0 0 1px #762020;
    }
  }
`;

export const FormMessageStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: black;
  // width: 120%;
  // height: 120%;
  max-width: 42rem;
  min-height: 62rem;
  transform: translate(-50%, -50%);
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  justify-content: center;
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: all 700ms;
  z-index: ${(props) => (props.active ? "15" : "-1")};

  &::before {
    position: absolute;
    content: "";
    left: 7.5%;
    bottom: 15%;
    width: 85%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.secundary};
  }
  &::after {
    position: absolute;
    content: "";
    left: 15%;
    bottom: 10%;
    width: 70%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.secundary};
  }
`;

export const SubmitInfoParagraphStyled = styled.p`
  font-family: Orbitron, sans-serif;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.primary};
  font-size: 2.6rem;
  width: 75%;
  text-align: center;
  margin-top: 18rem;
`;

export const ContactInputStyled = styled.input`
  font-family: Orbitron, sans-serif;
  font-size: 1.6rem;
  padding: 0.8rem;
  // border: ${({ theme }) => theme.border};

  margin-bottom: 1.6rem;
  background-color: black;
  color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: all 300ms;
  // box-shadow: ${(props) =>
    props.inputIsValid ? null : "0 0 0 3px #762020"};
  border: ${(props) =>
    props.inputIsValid ? "1px solid #48dbfb" : "1px solid #762020"};
  &:focus {
    // box-shadow: ${({ theme }) => theme.boxShadow};
    box-shadow: ${(props) =>
      props.inputIsValid
        ? `rgb(255 255 255) 0px 0px 1px,
      rgb(255 255 255) 0px 0px 2px,
      rgb(255 255 255) 0px 0px 2px,
      rgb(72 219 251) 0px 0px 2px,
      rgb(72 219 251) 0px 0px 3px,
      rgb(72 219 251) 0px 0px 5px,
      rgb(72 219 251) 0px 0px 15px`
        : "0 0 0 1px #762020"};
    outline: none;
  }
`;

export const ContactTextAreaStyled = styled.textarea`
  font-family: Orbitron, sans-serif;
  resize: none;
  font-size: 1.6rem;
  padding: 0.8rem;
  border: ${(props) =>
    props.inputIsValid ? "1px solid #48dbfb" : "1px solid #762020"};
  margin-bottom: 3.2rem;
  background-color: black;
  color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: all 300ms;
  &:focus {
    // box-shadow: ${({ theme }) => theme.boxShadow};
    box-shadow: ${(props) =>
      props.inputIsValid
        ? `rgb(255 255 255) 0px 0px 1px,
      rgb(255 255 255) 0px 0px 2px,
      rgb(255 255 255) 0px 0px 2px,
      rgb(72 219 251) 0px 0px 2px,
      rgb(72 219 251) 0px 0px 3px,
      rgb(72 219 251) 0px 0px 5px,
      rgb(72 219 251) 0px 0px 15px`
        : "0 0 0 1px #762020"};
    outline: none;
  }
`;
