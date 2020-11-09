import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
        //<Accordion list={list} />
      }
      {
        //<Search />
      }
      <Translate />
    </div>
  );
};

export default App;
