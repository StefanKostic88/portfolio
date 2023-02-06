import { useState, useEffect, useContext } from "react";
import React from "react";
import styled from "styled-components";

import intersectionObj from "../../../store/intersecting-context";

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
    cursor: pointer;
    transition: all 300ms;
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
    cursor: pointer;
    transition: all 300ms;
    &:focus {
      box-shadow: ${({ theme }) => theme.boxShadow};
      outline: none;
    }
  }
`;

const ContactHeadingPrimaryStyled = styled.h2`
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
const ContactHeadingSecundaryStyled = styled.h6`
  font-family: Orbitron, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColor.dark};
  // font-size: 1.8rem;
  font-size: 2.2rem;
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

const ContactUlStyled = styled.ul`
  display: flex;
  align-self: stretch;
  justify-content: space-around;
  margin-top: 4rem;
  gap: 2rem;
  // svg {
  //   fill: ${({ theme }) => theme.color.primary};
  //   width: 2.75rem;
  //   height: 2.75rem;
  // }
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

// console.log(ContactFormStyled); dodaj error prop

const ContactSection = React.forwardRef((props, ref) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [nameInputIsValid, setNameInputIsValid] = useState(false);
  const [nameInputIsTouched, setNameInputIsTouched] = useState(false);

  const [emailInputValue, setEmailInputValue] = useState("");
  const [emailInputIsValid, setEmailInputIsValid] = useState(false);
  const [emailInputIsTouched, SetEmailInputIsTouched] = useState(false);

  const [messageInputValue, setMessageInputValue] = useState("");
  const [messageInputIsValid, setMessageInputIsValid] = useState(false);
  const [messageInputIsTouched, setMessageInputIsTouched] = useState(false);

  const [formIsNotValid, setFormIsNotValid] = useState(true);

  // let nameInputIsValid = false;

  // const ctx = useContext(intersectionObj);
  // console.log(ctx);

  const nameInputChangeHandler = (e) => {
    if (e.target.value.trim() === "") {
      setNameInputIsValid(false);
      return;
    } else {
      setNameInputValue(e.target.value);
      setNameInputIsValid(true);
    }
  };

  const nameInputFocusHandler = () => {
    setNameInputIsTouched(true);
  };

  const nameInputBlurHandler = () => {
    if (nameInputIsTouched && !nameInputIsValid) {
      // console.log("blur: not valid");
      //add error style
      return;
    }
  };

  const emailInputChangeHandler = (e) => {
    e.preventDefault();
    // setEmailInputValue(e.target.value);
    // console.log(!e.target.value.includes("@"));
    if (e.target.value === "" || !e.target.value.includes("@")) {
      setEmailInputIsValid(false);
      return;
    } else {
      setEmailInputValue(e.target.value);
      setEmailInputIsValid(true);
    }
  };

  const emailInputFocusHandler = () => {
    SetEmailInputIsTouched(true);
  };

  const emailInputBlurHandler = () => {
    if (emailInputIsTouched && !emailInputIsValid) {
      // console.log("blur: not valid");
      //add error style
      return;
    }
  };

  // console.log(emailInputTouchedAndValid);

  ////
  const messageInputChangeHandler = (e) => {
    if (e.target.value.trim() === "") {
      console.log("notValid");
      setMessageInputIsValid(false);
    } else {
      setMessageInputIsValid(true);
    }
    setMessageInputValue(e.target.value);
  };

  const messageInputFocusHandler = () => {
    setMessageInputIsTouched(true);
  };

  let nameInputTouchedAndValid = nameInputIsTouched && nameInputIsValid;
  let emailInputTouchedAndValid = emailInputIsTouched && emailInputIsValid;
  let messageInputTouchedAndValid =
    messageInputIsValid && messageInputIsTouched;

  useEffect(() => {
    if (
      nameInputTouchedAndValid &&
      emailInputTouchedAndValid &&
      messageInputTouchedAndValid
    ) {
      setFormIsNotValid(false);
    } else {
      setFormIsNotValid(true);
    }
  }, [
    nameInputTouchedAndValid,
    emailInputTouchedAndValid,
    messageInputTouchedAndValid,
  ]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsNotValid) {
      console.log(nameInputValue, emailInputValue, messageInputValue);
    }
  };
  // console.log(ref);
  return (
    <SectionStyled id="contact" ref={ref}>
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
            onBlur={nameInputBlurHandler}
            onFocus={nameInputFocusHandler}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            onFocus={emailInputFocusHandler}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            onChange={messageInputChangeHandler}
            onFocus={messageInputFocusHandler}
          ></textarea>
          <ContactButtonStyled type="submit" disabled={formIsNotValid}>
            Submit
          </ContactButtonStyled>
        </ContactFormStyled>
        <ContactUlStyled>
          <li>
            <a href="#home">Github</a>
          </li>
          <li>
            <a href="#home">Linkedin</a>
          </li>
          <li>
            <a href="#home">Instagram</a>
          </li>
        </ContactUlStyled>
      </FormSectionStyled>
    </SectionStyled>
  );
});

export default ContactSection;
