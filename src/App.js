import React, { useState } from "react";
// Importing components
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
