answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramid(floor) {
  let n = answer;
  let string = "";
  for (let i = 1; i <= n; i++) {
    string = "";
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    console.log(string);
  }
}

pyramid(answer);