import styled from "styled-components";

const OverLayStyled = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    position: absolute;
    content: "";
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(72, 219, 251, 0.05);
  }
`;

const BackDrop = (props) => {
  return <OverLayStyled>{props.children}</OverLayStyled>;
};

export default BackDrop;
