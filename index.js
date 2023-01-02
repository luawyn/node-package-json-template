//npm init ou npm init -y que já vem preenchido

import { countries } from "./countries.js";

console.log("Hello");

// para rodar no console é node e o nome do arquivo === node index.js

// aplicação node que receberá o nome de um país pelo terminal, e o buscará na lista countries.js

//editar o package.son e colocar o type:module antes dos scripts

// console.log(countries); imprimir lista completa

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
