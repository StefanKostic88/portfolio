import styled from "styled-components";

import { DiJavascript1, DiSass, DiHtml5 } from "react-icons/di";
import { useState } from "react";

const SectionStyled = styled.div`
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

const FormSectionStyled = styled.div`
  display: flex;

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
`;

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;

  input {
    font-family: Orbitron, sans-serif;
    font-size: 1.6rem;
    padding: 0.8rem;
    border: ${({ theme }) => theme.border};
    margin-bottom: 1.6rem;
    background-color: black;
    color: ${({ theme }) => theme.color.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:focus {
      box-shadow: ${({ theme }) => theme.boxShadow};
      outline: none;
    }
  }
  textarea {
    font-family: Orbitron, sans-serif;
    resize: none;
    font-size: 1.6rem;
    padding: 0.8rem;
    border: ${({ theme }) => theme.border};
    margin-bottom: 3.2rem;
    background-color: black;
    color: ${({ theme }) => theme.color.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:focus {
      box-shadow: ${({ theme }) => theme.boxShadow};
      outline: none;
    }
  }
`;

const ContactHeadingPrimaryStyled = styled.h2`
  color: ${({ theme }) => theme.textColor.dark};
  text-shadow: ${({ theme }) => theme.boxShadow};
  font-weight: 400;
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 3.5rem;
`;
const ContactHeadingSecundaryStyled = styled.h6`
  color: ${({ theme }) => theme.textColor.dark};
  font-size: 1.8rem;
  // margin-bottom: 2.5rem;
  margin-bottom: 5rem;
`;

const ContactButtonStyled = styled.button`
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
  &:focus,
  &:hover {
    outline: none;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

const ContactUlStyled = styled.ul`
  display: flex;
  margin-top: 4rem;
  gap: 2rem;
  svg {
    fill: ${({ theme }) => theme.color.primary};
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const ContactSection = () => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [messageInputValue, setMessageInputValue] = useState("");

  const nameInputChangeHandler = (e) => {
    setNameInputValue(e.target.value);
  };

  const emailInputChangeHandler = (e) => {
    setEmailInputValue(e.target.value);
  };

  const messageInputChangeHandler = (e) => {
    setMessageInputValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(nameInputValue, emailInputValue, messageInputValue);
  };

  return (
    <SectionStyled>
      <div>
        <ContactHeadingPrimaryStyled>
          Have a question <br /> or <br /> want to hire me?
        </ContactHeadingPrimaryStyled>
        <ContactHeadingSecundaryStyled>
          Fell free to contact me
        </ContactHeadingSecundaryStyled>
      </div>
      <FormSectionStyled>
        <ContactFormStyled action="" onSubmit={formSubmitHandler}>
          <input
            type="text"
            placeholder="Name"
            onChange={nameInputChangeHandler}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={emailInputChangeHandler}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            onChange={messageInputChangeHandler}
          ></textarea>
          <ContactButtonStyled type="submit">Submit</ContactButtonStyled>
        </ContactFormStyled>
        <ContactUlStyled>
          <li>
            <a href="#home">
              <DiHtml5 />
            </a>
          </li>
          <li>
            <a href="#home">
              <DiHtml5 />
            </a>
          </li>
          <li>
            <a href="#home">
              <DiHtml5 />
            </a>
          </li>
        </ContactUlStyled>
      </FormSectionStyled>
    </SectionStyled>
  );
};

export default ContactSection;
