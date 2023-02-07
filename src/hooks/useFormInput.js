import { useState, useEffect } from "react";

const useFormInput = (callback, emailValue = false) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);
  const [inputIsTouched, setInputIsTouched] = useState(false);

  // console.log(callback(inputValue));
  // console.log(emailValue);

  const inputChangeHandler = (e) => {
    // let val = e.target.value;
    // e.target.value.trim() === "" && inputIsTouched
    // e.target.value === "" ||
    // (!e.target.value.includes("@") && emailInputIsTouched)
    // console.log(val);

    if (emailValue) {
      console.log("email");
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
      console.log("Not Email");
      setInputValue(e.target.value);
      if (e.target.value.trim() === "" && inputIsTouched) {
        setInputIsValid(false);
        return;
      } else {
        setInputIsValid(true);
      }
    }
  };
  // const inputChangeHandler = (e) => {
  //   setInputValue(e.target.value);
  //   console.log(e.target.value);
  //   // e.target.value.trim() === "" && inputIsTouched
  //   // e.target.value === "" ||
  //   // (!e.target.value.includes("@") && emailInputIsTouched)
  //   if (e.target.value.trim() === "" && inputIsTouched) {
  //     setInputIsValid(false);
  //     return;
  //   } else {
  //     setInputIsValid(true);
  //   }
  // };

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
  // console.log(inputTouchedAndValid);

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
