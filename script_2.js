
answer = prompt("De quel nom veux tu calculer la factorielle ?");

function fact(n) {
  let result = 1;
  for (let i = 1; i - 1 < n; i++) {
    result = result * i;
  }
  return result
}

console.log(`Le résultat est ${fact(answer)}`);
