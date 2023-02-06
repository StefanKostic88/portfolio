import React from "react";

const IntersectionObj = React.createContext({
  sectionIsIntersecting: false,
  intersectionObj: {
    contact: false,
    project: false,
    about: false,
    heroIsVisible: true,
  },
  getElement: () => {},
});

export default IntersectionObj;
