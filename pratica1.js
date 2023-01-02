// um script que procura pelo país na lista, colocar no argumento,
// exp: npm run pratica1 Chile

import { countries } from "./countries.js";

const busca = process.argv[2];

console.log(busca);

if (!busca) {
  console.log("Faltou o argumento de bsuca");
} else {
  const result = countries.filter((countrie) => {
    return countrie.name.toLowerCase().includes(busca.toLowerCase());
  });
  if (result.length === 0) {
    console.log("País não encontrado");
  } else {
    console.log(result);
  }
}
