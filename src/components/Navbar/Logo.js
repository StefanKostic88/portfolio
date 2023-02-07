import styled from "styled-components";
import logoImage from "../../assets/imgs/7t4e.gif";

const LogoContainerStyled = styled.div`
  width: 6rem;
  object-fit: cover;
  img {
    width: 100%;
  }
`;

const Logo = () => {
  return (
    <LogoContainerStyled>
      <img src={logoImage} alt="logo" />
    </LogoContainerStyled>
  );
};

export default Logo;
