import styled from "styled-components";

export const SectionProjectStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  max-width: 104rem;
  width: 100%;
  min-height: 100vh;
  color: ${({ theme }) => theme.textLight};
 
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    @media ${({ theme }) => theme.breakpoints.lg} {
      gap: 2rem;
      };
    @media(max-width: 925px){
      padding-top: 6rem;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
     };
    @media ${({ theme }) => theme.breakpoints.md} {
      gap: 2rem;
    };
    @media(max-width: 620px){
      grid-template-columns: 1fr;
    };
    @media ${({ theme }) => theme.breakpoints.xsm} {
    justify-items: center;
    };
`;

export const ProjectCardStyled = styled.figure`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: ${({ theme }) => theme.border};
  width: 31rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  transition: all 200ms linear;
  cursor: pointer;
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 28rem;
  height: 27rem;
  };
  @media(max-width: 925px){
    width: 31rem;
  height: 30rem;
   };
   @media ${({ theme }) => theme.breakpoints.md} {
    width: 28rem;
  height: 27rem;
  };
  @media(max-width: 620px){
    width: 40rem;
    height: 30rem;
   };
   @media ${({ theme }) => theme.breakpoints.xsm} {
    width: 90%;
    height: 27rem;
    };
&:hover {
 transform: scale(1.02);
 box-shadow: ${({ theme }) => theme.boxShadowhover};
}

  header {
    height: 55%;
    padding: 2rem 1rem 0 1rem;
    object-fit: cover;
    object-position: center;
    img {
      width: 100%;
    }
  }
  footer {
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
}
`;

export const ProjectHeadingStyled = styled.h5`
  color: ${({ theme }) => theme.textColor.light};
  font-size: 1.75rem;
  text-shadow: ${({ theme }) => theme.color.primary} 5px -2px 25px;
  margin-bottom: 1.75rem;
`;

export const ProcjetUlStyled = styled.ul`
  display: flex;
  justify-contnt: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
  svg {
    width: 3.25rem;
    height: 3.25rem;
    fill: ${({ theme }) => theme.color.primary};
  }
`;

export const ProcjetButtonStyled = styled.button`
  background-color: black;
  color: ${({ theme }) => theme.textColor.light};
  text-transform: uppercase;
  text-shadow: ${({ theme }) => theme.color.primary} 5px -2px 25px;
  cursor: pointer;
  border: ${({ theme }) => theme.border};
  padding: 0.55rem 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
