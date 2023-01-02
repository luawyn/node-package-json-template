// um script que lista os países pela primeira letra, colocar no argumento,
// exp: npm run pratica2 d

import { countries } from "./countries.js";

const search = process.argv[2];

if (!search) {
  console.log("Faltou um argumento de busca");
} else {
  const result = countries.filter(
    (countrie) => countrie.name.toLowerCase()[0] === search.toLowerCase()
  );
  console.log(result);
}
