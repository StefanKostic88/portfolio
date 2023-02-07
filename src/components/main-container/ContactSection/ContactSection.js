import { useState, useEffect } from "react";
import React from "react";
import useFormInput from "../../../hooks/useFormInput";
import styled from "styled-components";

import BackDrop from "../../modal/BackDrop";

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

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
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

const FormMessageStyled = styled.div`
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

const SubmitInfoParagraphStyled = styled.p`
  font-family: Orbitron, sans-serif;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.primary};
  font-size: 2.6rem;
  width: 75%;
  text-align: center;
  margin-top: 18rem;
`;

// `1px solid #48dbfb`

const ContactInputStyled = styled.input`
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

const ContactTextAreaStyled = styled.textarea`
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

// console.log(ContactFormStyled); dodaj error prop

const ContactSection = React.forwardRef((props, ref) => {
  // const [messageInputValue, setMessageInputValue] = useState("");
  // const [messageInputIsValid, setMessageInputIsValid] = useState(true);
  // const [messageInputIsTouched, setMessageInputIsTouched] = useState(false);

  const [formIsNotValid, setFormIsNotValid] = useState(true);

  const [formAlert, setFormAlert] = useState(false);

  const {
    inputValue: nameInputValue,
    inputIsValid: nameInputIsValid,
    inputIsTouched: nameInputIsTouched,
    inputChangeHandler: nameInputChangeHandler,
    inputFocusHandler: nameInputFocusHandler,
    inputBlurHandler: nameInputBlurHandler,
    resetInputState: resetNameInputState,
  } = useFormInput((value) => value.trim() === "");

  const {
    inputValue: emailInputValue,
    inputIsValid: emailInputIsValid,
    inputIsTouched: emailInputIsTouched,
    inputChangeHandler: emailInputChangeHandler,
    inputFocusHandler: emailInputFocusHandler,
    inputBlurHandler: emailInputBlurHandler,
    resetInputState: resetEmailInputState,
  } = useFormInput(
    (value, email) => value.trim() === "" || !value.includes("@")
  );

  const {
    inputValue: messageInputValue,
    inputIsValid: messageInputIsValid,
    inputIsTouched: messageInputIsTouched,
    inputChangeHandler: messageInputChangeHandler,
    inputFocusHandler: messageInputFocusHandler,
    inputBlurHandler: messageInputBlurHandler,
    resetInputState: reserMessageInputState,
  } = useFormInput((value) => value.trim() === "");

  ////
  // const messageInputChangeHandler = (e) => {
  //   setMessageInputValue(e.target.value);

  //   if (e.target.value.trim() === "") {
  //     console.log("notValid");
  //     setMessageInputIsValid(false);
  //   } else {
  //     setMessageInputIsValid(true);
  //   }
  // };

  // const messageInputFocusHandler = () => {
  //   setMessageInputIsTouched(true);
  // };

  // const messageInputBlurHandler = () => {
  //   if (messageInputValue.trim() === "" && messageInputIsTouched) {
  //     setMessageInputIsValid(false);
  //     return;
  //   }
  // };

  // console.log(messageInputIsValid);

  let nameInputTouchedAndValid =
    nameInputIsTouched && nameInputIsValid && nameInputValue.trim() !== "";
  let emailInputTouchedAndValid =
    emailInputIsTouched && emailInputIsValid && emailInputValue.trim() !== "";
  let messageInputTouchedAndValid =
    messageInputIsValid &&
    messageInputIsTouched &&
    messageInputValue.trim() !== "";
  // console.log(nameInputTouchedAndValid);
  // const resetNameInputState = () => {
  //   setNameInputValue("");
  //   setNameInputIsValid(true);
  //   setNameInputIsTouched(false);
  // };
  // const resetEmailInputState = () => {
  //   setEmailInputValue("");
  //   setEmailInputIsValid(true);
  //   SetEmailInputIsTouched(false);
  // };
  // const reserMessageInputState = () => {
  //   setMessageInputValue("");
  //   setMessageInputIsValid(true);
  //   setMessageInputIsTouched(false);
  // };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsNotValid) {
      console.log(nameInputValue, emailInputValue, messageInputValue);
      resetNameInputState();
      resetEmailInputState();
      reserMessageInputState();
      setFormAlert(true);
    }
  };

  useEffect(
    () => {
      if (
        nameInputTouchedAndValid &&
        emailInputTouchedAndValid &&
        messageInputTouchedAndValid
      ) {
        setFormIsNotValid(false);
      } else {
        setFormIsNotValid(true);
      }

      if (formAlert) {
        setFormIsNotValid(true);
        setTimeout(() => {
          setFormAlert(false);
        }, 3000);
      }
    },
    [
      // nameInputValue,
      // nameInputTouchedAndValid,
      // emailInputTouchedAndValid,
      // messageInputTouchedAndValid,
    ]
  );

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
          <ContactInputStyled
            value={nameInputValue}
            type="text"
            placeholder={nameInputIsValid ? "Name" : "Name is required"}
            inputIsValid={nameInputIsValid}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            onFocus={nameInputFocusHandler}
          />
          <ContactInputStyled
            value={emailInputValue}
            type="email"
            placeholder={emailInputIsValid ? "Email" : "Email is required"}
            inputIsValid={emailInputIsValid}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            onFocus={emailInputFocusHandler}
          />
          <ContactTextAreaStyled
            value={messageInputValue}
            name="message"
            inputIsValid={messageInputIsValid}
            id=""
            cols="30"
            rows="10"
            placeholder={
              messageInputIsValid
                ? "Your Message"
                : "Please be kind and send me a message"
            }
            onChange={messageInputChangeHandler}
            onFocus={messageInputFocusHandler}
            onBlur={messageInputBlurHandler}
          ></ContactTextAreaStyled>
          {formAlert && <BackDrop />}
          <FormMessageStyled active={formAlert}>
            <SubmitInfoParagraphStyled>
              Thank you for contacting me. I will reply to you as soon as
              possible.
            </SubmitInfoParagraphStyled>
          </FormMessageStyled>

          <ContactButtonStyled type="submit" disabled={formIsNotValid}>
            Submit
          </ContactButtonStyled>
        </ContactFormStyled>
        <ContactUlStyled>
          <li>
            <a
              href="https://github.com/StefanKostic88"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/stefan-kostic-8866a625"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/cupri885"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </ContactUlStyled>
      </FormSectionStyled>
    </SectionStyled>
  );
});

export default ContactSection;

// const [nameInputValue, setNameInputValue] = useState("");
// const [nameInputIsValid, setNameInputIsValid] = useState(true);
// const [nameInputIsTouched, setNameInputIsTouched] = useState(false);

// const [emailInputValue, setEmailInputValue] = useState("");
// const [emailInputIsValid, setEmailInputIsValid] = useState(true);
// const [emailInputIsTouched, SetEmailInputIsTouched] = useState(false);

// const nameInputChangeHandler = (e) => {
//   setNameInputValue(e.target.value);
//   if (e.target.value.trim() === "" && nameInputIsTouched) {
//     console.log("not valid second");
//     setNameInputIsValid(false);
//     return;
//   } else {
//     setNameInputIsValid(true);
//   }
// };

// const nameInputFocusHandler = () => {
//   setNameInputIsTouched(true);
// };

// const nameInputBlurHandler = () => {
//   if (nameInputIsTouched && nameInputValue.trim() === "") {
//     // console.log("blur: not valid");
//     setNameInputIsValid(false);
//     return;
//   }
// };

// const emailInputChangeHandler = (e) => {
//   setEmailInputValue(e.target.value);
//   if (
//     e.target.value === "" ||
//     (!e.target.value.includes("@") && emailInputIsTouched)
//   ) {
//     setEmailInputIsValid(false);
//     return;
//   } else {
//     setEmailInputIsValid(true);
//   }
// };

// const emailInputFocusHandler = () => {
//   SetEmailInputIsTouched(true);
// };
// // !emailInputIsValid
// const emailInputBlurHandler = () => {
//   if (
//     (emailInputIsTouched && emailInputValue.trim() === "") ||
//     !emailInputValue.includes("@")
//   ) {
//     setEmailInputIsValid(false);
//     return;
//   }
// };

//
