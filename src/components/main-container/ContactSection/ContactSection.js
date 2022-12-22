import styled from "styled-components";

import { DiJavascript1, DiSass, DiHtml5 } from "react-icons/di";

const SectionStyled = styled.div`
  position: relative;

  // border: 3px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 104rem;
  width: 100%;
  // min-height: calc(95vh - 4.8rem);
  min-height: 100vh;
  color: ${({ theme }) => theme.textLight};
`;

const FormSectionStyled = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  min-height: 53rem;
  min-width: 70%;
  background-color: black;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;

  input {
    font-size: 1.6rem;
    padding: 0.8rem;
    border: ${({ theme }) => theme.border};
    margin-bottom: 1.6rem;
    background-color: black;
    color: ${({ theme }) => theme.color.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:focus {
      box-shadow: ${({ theme }) => theme.boxShadow};
      outline: none;
    }
  }
  textarea {
    font-size: 1.6rem;
    padding: 0.8rem;
    border: ${({ theme }) => theme.border};
    margin-bottom: 3.2rem;
    background-color: black;
    color: ${({ theme }) => theme.color.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:focus {
      box-shadow: ${({ theme }) => theme.boxShadow};
      outline: none;
    }
  }
`;

const ContactHeadingPrimaryStyled = styled.h2`
  color: ${({ theme }) => theme.textColor.dark};
  text-shadow: ${({ theme }) => theme.boxShadow};
  font-weight: 400;
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 3.5rem;
`;
const ContactHeadingSecundaryStyled = styled.h6`
  color: ${({ theme }) => theme.textColor.dark};
  font-size: 1.8rem;
  // margin-bottom: 2.5rem;
  margin-bottom: 5rem;
`;

const ContactButtonStyled = styled.button`
  align-self: center;
  padding: 0.55rem 1.5rem;
  font-size: 2.25rem;
  border: ${({ theme }) => theme.border};
  background-color: black;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  &:focus,
  &:hover {
    outline: none;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

const ContactUlStyled = styled.ul`
  display: flex;
  margin-top: 4rem;
  gap: 2rem;
  svg {
    fill: ${({ theme }) => theme.color.primary};
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const ContactSection = () => {
  return (
    <SectionStyled>
      <div>
        <ContactHeadingPrimaryStyled>
          Have a question <br /> or <br /> want to hire me?
        </ContactHeadingPrimaryStyled>
        <ContactHeadingSecundaryStyled>
          Fell free to contact me
        </ContactHeadingSecundaryStyled>
      </div>
      <FormSectionStyled>
        <ContactFormStyled action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <ContactButtonStyled type="submit">Submit</ContactButtonStyled>
        </ContactFormStyled>
        <ContactUlStyled>
          <li>
            <a href="#home">
              <DiHtml5 />
            </a>
          </li>
          <li>
            <a href="#home">
              <DiHtml5 />
            </a>
          </li>
          <li>
            <a href="#home">
              <DiHtml5 />
            </a>
          </li>
        </ContactUlStyled>
      </FormSectionStyled>
    </SectionStyled>
  );
};

export default ContactSection;
