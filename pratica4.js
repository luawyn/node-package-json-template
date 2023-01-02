// script que roda uma frase que precisa de dois argumentos
// exp: npm run pratica4 luana 10

const name = process.argv[2];
const age = Number(process.argv[3]);

if (!name || !age) {
  console.log("Faltou um argumento nome ou idade");
} else {
  const newAge = age + 7;
  console.log(
    `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge}`
  );
}
