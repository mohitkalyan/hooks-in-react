import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const options = [
  { label: "Color Red", value: "red" },
  { label: "Color Green", value: "green" },
  { label: "Always Blue", value: "blue" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion list={list} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectChange={setSelected}
        />
      </Route>
    </div>
  );
};

export default App;
