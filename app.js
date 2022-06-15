window.onload = () => {
  //write your code here
  // document.querySelector("#domain").innerHTML = generateDomain();
};

let generateDomain = () => {
  let pronoun = ["a", "the", "we", "us"];
  let adjective = ["brave", "charming", "big", "small", "strong", "funny"];
  let noun = ["dog", "river", "house", "beer", "chocolate", "book"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let adjIndx = Math.floor(Math.random() * adjective.length);
  let nounIndx = Math.floor(Math.random() * noun.length);

  return pronoun[proIndx] + " " + adjective[adjIndx] + " " + noun[nounIndx];
};
console.log("Any string");
