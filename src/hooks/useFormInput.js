import { useState } from "react";

const useFormInput = (callback, emailValue = false) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputChangeHandler = (e) => {
    if (emailValue) {
      setInputValue(e.target.value);
      if (
        e.target.value === "" ||
        (!e.target.value.includes("@") && inputIsTouched)
      ) {
        setInputIsValid(false);
        return;
      } else {
        setInputIsValid(true);
      }
    } else {
      setInputValue(e.target.value);
      if (e.target.value.trim() === "" && inputIsTouched) {
        setInputIsValid(false);
        return;
      } else {
        setInputIsValid(true);
      }
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

  let inputTouchedAndValid =
    inputIsTouched && inputIsValid && inputValue.trim() !== "";

  return {
    inputValue,
    inputIsValid,
    inputIsTouched,
    inputChangeHandler,
    inputFocusHandler,
    inputBlurHandler,
    resetInputState,
    inputTouchedAndValid,
  };
};

export default useFormInput;
