/* eslint-disable no-unused-vars */
import React from "react";
import AccordionPanel from "./AccordionPanel";
import "../../CSS/SolutionsCSS/AccordionContainer.css";

const AccordionContainer = () => {
  return (
    <div className="accordion-container">
      <div className="accordion-content">
        <h2 className="accordion-title">Financial Services</h2>
        <p className="accordion-description">
          Whether you’re looking for a consultant to provide expert guidance on
          an existing project or seeking a complete managed outcome on a
          transformational initiative, we’re here with solutions that support
          your business and vision—no matter the size.
        </p>
        <p>
          We believe only an expert can provide the best business solutions for
          you. That’s why our team works to understand the intricacies,
          challenges and pain points that drive your industry. With 60 years of
          proven expertise supporting a number of industries, we’ll do what it
          takes to help you gain a competitive edge.
        </p>
        <p>
          Together, we can achieve powerful results. Contact us today to start a
          conversation.
        </p>
        <AccordionPanel title="Financial Services">
          <p>
            The Financial Services industry is rapidly transforming and
            evolving. From mobile banking initiatives to cloud migrations, to
            large-scale data projects, to core systems implementations, Kforce
            successfully partners with over 300 Financial Services & FinTech
            clients. Learn how to leverage our industry expertise as you execute
            on technology initiatives to improve customer experience, product
            innovation, regulatory compliance and scaling your business for
            growth.
          </p>
        </AccordionPanel>
        <AccordionPanel title="Communications">
          <p>
            Now, more than ever, specialized talent is needed to address the
            rising consumer demand for faster connections and on-demand content.
            From wireless operations and telecom services to entertainment and
            advertising, the world of communications continues to evolve,
            presenting complex challenges and a need for extended capabilities.
            Learn how our team of industry experts can keep your customers
            connected—at home, at work, or on the go—with cutting-edge solutions
            built for today’s digital world.
          </p>
        </AccordionPanel>
        <AccordionPanel title="Healthcare">
          <p>
            Like Kforce, helping people is the heart of your business. That’s
            why our team of industry-leading account managers and recruiting
            experts deliver strategic and industry-specific solutions to your
            most impactful initiatives. From healthcare payers and providers to
            life sciences and medical devices, we know the solutions you need
            are as varied as the industry you serve. See the value of a true
            partnership with solutions that are purposeful, scalable and
            customized to fit your business needs.
          </p>
        </AccordionPanel>
        <AccordionPanel title="Insurance">
          <p>
            Today’s technology and workforce innovations can enable sustained
            growth and streamline process while improving customer experience.
            We help you deliver tomorrow’s insurance solutions by optimizing
            your transformation leadership, domain operations, customer
            engagement, data & applied AI and technology services. Learn how our
            industry experts can help you find the specialized talent and
            integrate the technology you need to transform your business.
          </p>
        </AccordionPanel>
      </div>
    </div>
  );
};

export default AccordionContainer;
