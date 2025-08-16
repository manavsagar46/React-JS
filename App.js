import React from "react";
import ReactDOM from "react";

// const heading = React.createElement("h1", {id:"heading", abc:"xyz"}, "Hello from react");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);
// console.log(typeof heading)
// console.log(root)

root.render(parent);
