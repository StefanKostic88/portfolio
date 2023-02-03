import React from "react";

const intersectionObj = React.createContext({
  sectionIsIntersecting: false,
  obj: { title: "" },
});

export default intersectionObj;
