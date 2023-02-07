import { useState } from "react";

const useFormInput = (callback, emailValue = false) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);
  const [inputIsTouched, setInputIsTouched] = useState(false);

  console.log(callback(inputValue));

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
    // e.target.value.trim() === "" && inputIsTouched
    // e.target.value === "" ||
    // (!e.target.value.includes("@") && emailInputIsTouched)
    if (e.target.value.trim() === "" && inputIsTouched) {
      setInputIsValid(false);
      return;
    } else {
      setInputIsValid(true);
    }
  };

  const inputFocusHandler = () => {
    setInputIsTouched(true);
  };

  const inputBlurHandler = () => {
    if (inputIsTouched && callback(inputValue)) {
      setInputIsValid(false);
      return;
    }
  };
  const resetInputState = () => {
    setInputValue("");
    setInputIsValid(true);
    setInputIsTouched(false);
  };

  return {
    inputValue,
    inputIsValid,
    inputIsTouched,
    inputChangeHandler,
    inputFocusHandler,
    inputBlurHandler,
    resetInputState,
  };
};

export default useFormInput;
