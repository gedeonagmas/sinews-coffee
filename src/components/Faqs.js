import { useState } from "react";
import { Accordion } from "react-bootstrap";

const faqsData = [
  {
    id: 1,
    title: "What is Finance Consultant?",
  },
  { id: 2, title: "How to Book a New Consultant?" },
  { id: 3, title: "What is the Benifits of Busines ?" },
  { id: 4, title: "How to Book a New Consultant?" },
];

const Faqs = () => {
  const [active, setActive] = useState(faqsData[0].id);
  return (
    <div id="tab1" className="tab_content">
      <Accordion
        defaultActiveKey={faqsData[0].id}
        as={"ul"}
        className="accordion"
      >
        {faqsData.map((faq) => (
          <li key={faq.id}>
            <Accordion.Toggle
              as="a"
              eventKey={faq.id}
              onClick={() => setActive(faq.id == active ? null : faq.id)}
              className={faq.id == active ? "active" : ""}
            >
              <span> {faq.title} </span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={faq.id}>
              <p>
                Continually cultivate inexpensive convergence whereas
                collaborative communitie. Credib generate team building vorta
                after professional value. Proactively administrate enabled
                paradigm
              </p>
            </Accordion.Collapse>
          </li>
        ))}
      </Accordion>
    </div>
  );
};
export default Faqs;
