// um script que adiciona um objeto na lista, colocar nome e codigo, colocar no argumento,
// exp: npm run pratica3 Banana BA

import { countries } from "./countries.js";

const name = process.argv[2];
const code = process.argv[3];

console.log(name);
console.log(code);

if (!name || !code) {
  console.log("Faltou o nome ou o código do país");
} else {
  const newCountrie = {
    name,
    code,
  };
  countries.push(newCountrie);
  console.log(countries[countries.length - 1]);
}
