import { useState } from "react";
import styled from "styled-components";

import { DiJavascript1, DiSass, DiHtml5 } from "react-icons/di";

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
  &:disabled {
    color: #762020;
    box-shadow: 0 0 0 1px #762020;
    border: 1px solid #762020;
    cursor: not-allowed;
    &:hover {
      outline: none;
      box-shadow: none;
    }
  }
`;

const ContactUlStyled = styled.ul`
  display: flex;
  margin-top: 4rem;
  gap: 2rem;
  svg {
    fill: ${({ theme }) => theme.color.primary};
    width: 2.75rem;
    height: 2.75rem;
  }
`;

// console.log(ContactFormStyled); dodaj error prop

const ContactSection = () => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [nameInputIsValid, setNameInputIsValid] = useState(false);
  const [emailInputValue, setEmailInputValue] = useState("");
  const [emailInputIsValid, setEmailInputIsValid] = useState(false);
  const [messageInputValue, setMessageInputValue] = useState("");

  const [nameInputIsTouched, setNameInputIsTouched] = useState(false);
  const [EmailInputIsTouched, SetEmailInputIsTouched] = useState(false);

  const nameInputChangeHandler = (e) => {
    setNameInputIsTouched(true);
    if (e.target.value === "") {
      // console.log("isNotValid");
      setNameInputIsValid(false);
      return;
    } else {
      setNameInputValue(e.target.value);
      setNameInputIsValid(true);
    }
  };
  const nameInputBlurHandler = () => {
    if (nameInputIsTouched && !nameInputIsValid) {
      // console.log("blur: not valid");
      //add error style
      return;
    }
  };
  const nameInputFocusHandler = () => {
    setNameInputIsTouched(true);
    // console.log("focus");
  };

  /////

  const emailInputChangeHandler = (e) => {
    e.preventDefault();
    // setEmailInputValue(e.target.value);
    console.log(e.target.value.includes("@"));
    if (e.target.value === "" || !e.target.value.includes("@")) {
      // console.log("isNotValid");
      setEmailInputIsValid(false);
      return;
    } else {
      setEmailInputValue(e.target.value);
      setEmailInputIsValid(true);
    }
  };
  // console.log(emailInputIsValid);

  const emailInputBlurHandler = () => {
    if (EmailInputIsTouched && !emailInputIsValid) {
      // console.log("blur: not valid");
      //add error style
      return;
    }
  };

  const emailInputFocusHandler = () => {
    SetEmailInputIsTouched(true);
    console.log("mail focus");
  };

  // console.log(EmailInputIsTouched);

  ////
  const messageInputChangeHandler = (e) => {
    setMessageInputValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!nameInputIsValid || !emailInputIsValid) {
      console.log(nameInputIsValid, "Name is not Valid");
      // console.log("name is nov valid");
      // console.log(nameInputValue);
    } else {
      console.log(nameInputValue, "valid name");
      console.log(nameInputIsValid, "Name Valid");
    }
    // console.log("submit");
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
          ></textarea>
          <ContactButtonStyled type="submit" disabled={false}>
            Submit
          </ContactButtonStyled>
        </ContactFormStyled>
        <ContactUlStyled>
          <li>
            <a href="#home">
              <DiHtml5 />
            </a>
          </li>
          <li>
            <a href="#home">
              <DiJavascript1 />
            </a>
          </li>
          <li>
            <a href="#home">
              <DiSass />
            </a>
          </li>
        </ContactUlStyled>
      </FormSectionStyled>
    </SectionStyled>
  );
};

export default ContactSection;
