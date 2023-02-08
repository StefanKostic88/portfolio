import { ContactUlStyled } from "../../../styles/ContactStyles/ContactStyles";
import contactArr from "../../../../assets/data/contactLinksData";

const renderedContent = contactArr.map((el) => {
  return (
    <li key={el.id}>
      <a href={el.href} rel="noreferrer" target="_blank">
        {el.title}
      </a>
    </li>
  );
});

const ContactFormList = () => {
  return <ContactUlStyled>{renderedContent}</ContactUlStyled>;
};

export default ContactFormList;
