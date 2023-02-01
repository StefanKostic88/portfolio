import React from "react";

const CardContext = React.createContext({
  cardIsClicked: false,
  modalObj: {
    img: "",
    title: "",
    textContent: "",
    sourceCode: "",
    liveVersion: "",
  },
  projectsArr: [],
  info: null,
});

export default CardContext;
