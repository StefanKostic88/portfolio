//FORM CONTROL
// const [nameInputValue, setNameInputValue] = useState("");
// const [nameInputIsValid, setNameInputIsValid] = useState(true);
// const [nameInputIsTouched, setNameInputIsTouched] = useState(false);

// const [emailInputValue, setEmailInputValue] = useState("");
// const [emailInputIsValid, setEmailInputIsValid] = useState(true);
// const [emailInputIsTouched, SetEmailInputIsTouched] = useState(false);

// const [messageInputValue, setMessageInputValue] = useState("");
// const [messageInputIsValid, setMessageInputIsValid] = useState(true);
// const [messageInputIsTouched, setMessageInputIsTouched] = useState(false);

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

// console.log(
//   nameInputIsTouched,
//   emailInputIsTouched,
//   messageInputIsTouched,
//   "Touched"
// );

// console.log(messageInputIsValid);
//

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

// const [formIsNotValid, setFormIsNotValid] = useState(true);

// const [formAlert, setFormAlert] = useState(false);

// const {
//   inputValue: nameInputValue,
//   inputIsValid: nameInputIsValid,
//   // inputIsTouched: nameInputIsTouched,
//   inputChangeHandler: nameInputChangeHandler,
//   inputFocusHandler: nameInputFocusHandler,
//   inputBlurHandler: nameInputBlurHandler,
//   resetInputState: resetNameInputState,
//   inputTouchedAndValid: nameInputTouchedAndValid,
// } = useFormInput((value) => value.trim() === "");

// const {
//   inputValue: emailInputValue,
//   inputIsValid: emailInputIsValid,
//   // inputIsTouched: emailInputIsTouched,
//   inputChangeHandler: emailInputChangeHandler,
//   inputFocusHandler: emailInputFocusHandler,
//   inputBlurHandler: emailInputBlurHandler,
//   resetInputState: resetEmailInputState,
//   inputTouchedAndValid: emailInputTouchedAndValid,
// } = useFormInput(
//   (value) => value.trim() === "" || !value.includes("@"),
//   true
// );

// const {
//   inputValue: messageInputValue,
//   inputIsValid: messageInputIsValid,
//   // inputIsTouched: messageInputIsTouched,
//   inputChangeHandler: messageInputChangeHandler,
//   inputFocusHandler: messageInputFocusHandler,
//   inputBlurHandler: messageInputBlurHandler,
//   resetInputState: reserMessageInputState,
//   inputTouchedAndValid: messageInputTouchedAndValid,
// } = useFormInput((value) => value.trim() === "");

// const formSubmitHandler = (e) => {
//   e.preventDefault();
//   if (!formIsNotValid) {
//     console.log(nameInputValue, emailInputValue, messageInputValue);
//     resetNameInputState();
//     resetEmailInputState();
//     reserMessageInputState();
//     setFormAlert(true);
//   }
// };

// useEffect(() => {
//   if (
//     nameInputTouchedAndValid &&
//     emailInputTouchedAndValid &&
//     messageInputTouchedAndValid
//   ) {
//     setFormIsNotValid(false);
//   } else {
//     setFormIsNotValid(true);
//   }

//   if (formAlert) {
//     setFormIsNotValid(true);
//     setTimeout(() => {
//       setFormAlert(false);
//     }, 3000);
//   }
// }, [
//   nameInputTouchedAndValid,
//   emailInputTouchedAndValid,
//   messageInputTouchedAndValid,
// ]);

{
  /* <ContactFormStyled action="" onSubmit={formSubmitHandler}>
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
        </ContactFormStyled> */
}
