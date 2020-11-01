import React from "react";
import Accordion from "./components/Accordion";

const list = [
  {
    title: "I want to learn hooks",
    description: "Hooks are easy to learn. You will learn it very fast.",
  },
  {
    title: "What is API",
    description: "Apllication process interface, is very east to learn",
  },
  { title: "How to lear Redux", description: "Just by doing and programming" },
];

const App = () => {
  return (
    <di>
      <Accordion list={list} />
    </di>
  );
};

export default App;
