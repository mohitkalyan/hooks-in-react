import React, { useState } from "react";

const Accordion = ({ list }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    return setActiveIndex(index);
  };

  const renderedList = list.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"> </i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.description}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div>
      <div className="ui styled accordion">{renderedList}</div>
    </div>
  );
};

export default Accordion;
