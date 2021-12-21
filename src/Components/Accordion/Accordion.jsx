const Accordion = (props) => {
  return (
    <div className="accordion">
      <div className="accordion-title">{/* Here goes the title */}</div>

      <div className="accordion-content">
        {/* Here goes the main content */}
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
