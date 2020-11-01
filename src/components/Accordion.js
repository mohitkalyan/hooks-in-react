import React from "react";

const Accordion = ({ list }) => {
  const renderedList = list.map((item) => {
    return (
      <React.Fragment>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </React.Fragment>
    );
  });

  return <div>{renderedList}</div>;
};

export default Accordion;
