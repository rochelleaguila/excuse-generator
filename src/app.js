/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#bttn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

function init() {
  const button = document.querySelector("#bttn");
  const excuseElement = document.querySelector("#excuse");
  if (button && excuseElement) {
    button.addEventListener("click", () => {
      excuseElement.innerHTML = generateExcuse();
    });
  } else {
    console.error("Button or excuse element not found!");
  }
  console.log("Initialization complete!");
}
window.onload = init;
const generateExcuse = () => {
  const who = ["The dog", "My grandma", "Bob's turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const whoIndex = Math.floor(Math.random() * who.length);
  const actionIndex = Math.floor(Math.random() * action.length);
  const whatIndex = Math.floor(Math.random() * what.length);
  const whenIndex = Math.floor(Math.random() * when.length);
  return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
};
