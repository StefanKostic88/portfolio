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
  svg {
    fill: red;
  }
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
`;

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  input {
    font-size: 1.6rem;
    padding: 0.8rem;
    border: 1px solid rgb(72, 219, 251);
    margin-bottom: 1.6rem;
    background-color: black;
    color: rgb(72, 219, 251);
  }
  textarea {
    font-size: 1.6rem;
    padding: 0.8rem;
    border: 1px solid rgb(72, 219, 251);
    margin-bottom: 3.2rem;
    background-color: black;
    color: rgb(72, 219, 251);
  }
  button {
    border: 1px solid rgb(72, 219, 251);
    background-color: black;
    color: rgb(72, 219, 251);
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
  margin-bottom: 2.5rem;
`;

const ContactButtonStyled = styled.button`
  align-self: center;
  padding: 0.75rem 1.5rem;
  font-size: 2.25rem;
`;

const ContactUlStyled = styled.ul`
  display: flex;
  gap: 2rem;
  svg {
    fill: red;
    width: 4rem;
    height: 4rem;
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
            <DiHtml5 />
          </li>
          <li>
            <DiHtml5 />
          </li>
          <li>
            <DiHtml5 />
          </li>
        </ContactUlStyled>
      </FormSectionStyled>
    </SectionStyled>
  );
};

export default ContactSection;
