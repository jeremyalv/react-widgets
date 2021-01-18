import React, { useState } from "react";
// Importing components
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a javascript framework for building interactive UIs",
  },
  {
    title: "Why use React?",
    content: "It's  powerful and fast, and makes creating Views so much easier",
  },
  {
    title: "How do you use React?",
    content: "We use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        {/* Whenever we provide children elements inside JSX, they automatically get passed to the parent component as props with name 'children' */}
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          onSelectedChange={setSelected}
          selected={selected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
