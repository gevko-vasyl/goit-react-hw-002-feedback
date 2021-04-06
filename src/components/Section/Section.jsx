import './Section.scss';

const Section = ({ children }) => (
  <section className="Section">
    <h1 className="Section__title">Please leave feedback</h1>
    {children}
  </section>
);

export default Section;
