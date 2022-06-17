/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#domain").innerHTML = generateDomain();
};
//write your code here

const generateDomain = () => {
  let pronoun = ["a", "the", "we", "us"];
  let adjective = ["brave", "charming", "big", "small", "strong", "funny"];
  let noun = ["dog", "river", "house", "beer", "chocolate", "book"];

  let myArray = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        myArray.push("  " + pronoun[i] + adjective[j] + noun[k] + ".com");
      }
    }
  }

  return myArray;
};
