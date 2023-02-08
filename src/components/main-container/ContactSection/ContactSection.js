import React from "react";

import ContactFormHeading from "./ContactFormComponents/ContactFormHeading";
import ContactFormControls from "./ContactFormComponents/ContactFormControls";
import ContactFormList from "./ContactFormComponents/ContactFormList";

import {
  SectionStyled,
  FormSectionStyled,
} from "../../styles/ContactStyles/ContactStyles";

const ContactSection = React.forwardRef((props, ref) => {
  return (
    <SectionStyled id="contact" ref={ref}>
      <ContactFormHeading />
      <FormSectionStyled>
        <ContactFormControls />
        <ContactFormList />
      </FormSectionStyled>
    </SectionStyled>
  );
});

export default ContactSection;

//Wire up to an email
