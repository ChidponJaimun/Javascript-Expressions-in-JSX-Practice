//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const fName = "Chidpon";
const lName = "Jaimun";
const date = new Date();
const year = date.getFullYear();

const customStyle = {
  color: "red",
  fontSize: "40px",
  border: "1px solid blue"
};

customStyle.border = "1px solid black";

ReactDOM.render(
  <div>
    <p style={customStyle}>Created by {fName + " " + lName}.</p>
    <p>Copyright {year}.</p>
  </div>,
  document.getElementById("root")
);
