import { useState, useEffect } from "react";

import BackDrop from "../../../modal/BackDrop";
import useFormInput from "../../../../hooks/useFormInput";

import {
  ContactFormStyled,
  ContactButtonStyled,
  FormMessageStyled,
  SubmitInfoParagraphStyled,
  ContactInputStyled,
  ContactTextAreaStyled,
} from "../../../styles/ContactStyles/ContactStyles";

const ContactFormControls = () => {
  const [formIsNotValid, setFormIsNotValid] = useState(true);

  const [formAlert, setFormAlert] = useState(false);

  const {
    inputValue: nameInputValue,
    inputIsValid: nameInputIsValid,
    // inputIsTouched: nameInputIsTouched,
    inputChangeHandler: nameInputChangeHandler,
    inputFocusHandler: nameInputFocusHandler,
    inputBlurHandler: nameInputBlurHandler,
    resetInputState: resetNameInputState,
    inputTouchedAndValid: nameInputTouchedAndValid,
  } = useFormInput((value) => value.trim() === "");

  const {
    inputValue: emailInputValue,
    inputIsValid: emailInputIsValid,
    // inputIsTouched: emailInputIsTouched,
    inputChangeHandler: emailInputChangeHandler,
    inputFocusHandler: emailInputFocusHandler,
    inputBlurHandler: emailInputBlurHandler,
    resetInputState: resetEmailInputState,
    inputTouchedAndValid: emailInputTouchedAndValid,
  } = useFormInput(
    (value) => value.trim() === "" || !value.includes("@"),
    true
  );

  const {
    inputValue: messageInputValue,
    inputIsValid: messageInputIsValid,
    // inputIsTouched: messageInputIsTouched,
    inputChangeHandler: messageInputChangeHandler,
    inputFocusHandler: messageInputFocusHandler,
    inputBlurHandler: messageInputBlurHandler,
    resetInputState: reserMessageInputState,
    inputTouchedAndValid: messageInputTouchedAndValid,
  } = useFormInput((value) => value.trim() === "");

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

    if (formAlert) {
      setFormIsNotValid(true);
      setTimeout(() => {
        setFormAlert(false);
      }, 3000);
    }
  }, [
    nameInputTouchedAndValid,
    emailInputTouchedAndValid,
    messageInputTouchedAndValid,
  ]);

  return (
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
          Thank you for contacting me. I will reply to you as soon as possible.
        </SubmitInfoParagraphStyled>
      </FormMessageStyled>

      <ContactButtonStyled type="submit" disabled={formIsNotValid}>
        Submit
      </ContactButtonStyled>
    </ContactFormStyled>
  );
};

export default ContactFormControls;
