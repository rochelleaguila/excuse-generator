/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", () => {
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

  const generateExcuse = () => {
    const whoIndx = Math.floor(Math.random() * who.length);
    const actnIndx = Math.floor(Math.random() * action.length);
    const whatIndx = Math.floor(Math.random() * what.length);
    const whenIndx = Math.floor(Math.random() * when.length);

    return `${who[whoIndx]} ${action[actnIndx]} ${what[whatIndx]} ${when[whenIndx]}`;
  };

  const bttn = document.querySelector("#bttn");
  const excuseElement = document.querySelector("#excuse");

  bttn.addEventListener("click", () => {
    excuseElement.textContent = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
});