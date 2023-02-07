import React from "react";

const IntersectionObj = React.createContext({
  intersectionObj: {
    contact: false,
    project: false,
    about: false,
  },
  getElement: () => {},
});

export default IntersectionObj;
