import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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
    <div>
      {
        //<Accordion list={list} />}
      }
      <Search />
    </div>
  );
};

export default App;
