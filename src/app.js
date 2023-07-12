let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function generar() {
  //La forma para declarar un arreglo es la siguiente
  let combinations = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let k = 0; k < adj.length; k++) {
      for (let j = 0; j < noun.length; j++) {
        let combinations = pronoun[i] + adj[k] + noun[j]+ ".net";
        combinations.push(combinations);
      }
    }
  }
  return combinations;
}
let allCombinations = generar();
console.log(allCombinations);
