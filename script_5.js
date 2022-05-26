const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


function booksRented(array) {
  a = true;
  b = true;
  books.forEach(element => {
    if (element.rented > 0) {
      a = true;
    } else {
      b = false;
    }
  });
  if (b === true) {
    console.log("Oui")
  }
  else {
    console.log('Non')
  }
}

function selectRented(array) {
  const allRented = [];
  books.forEach(object => {
    a = object.rented;
    allRented.push(`${a}`);

  })
  maxRented = Math.max(...allRented);
  let result = array.find(object => object.rented === maxRented);
  return result.title;
}

function selectMinRented(array) {
  const allRented = [];
  books.forEach(object => {
    a = object.rented;
    allRented.push(`${a}`);

  })
  minRented = Math.min(...allRented);
  let result = array.find(object => object.rented === minRented);
  return result.title;
}

function findBook(array) {
  let result = array.find(object => object.id === 873495);
  return result
}

function deleteBook(array) {
  var resultDelete = array.slice(1);
  return resultDelete
}
function sortAlpha(array) {
  resultDelete = array.sort((a, b) => a.title.localeCompare(b.title));
  return resultDelete
}

console.log('Est-ce que tous les livres ont été au moins empruntés une fois ?');
console.log(booksRented(books));
console.log('Quel est livre le plus emprunté ?');
console.log(selectRented(books));
console.log('Quel est le livre le moins emprunté ?');
console.log(selectMinRented(books));
console.log("Trouve le livre avec l'ID: 873495");
console.log(findBook(books));
console.log("Supprime le livre avec l'ID: 133712");
console.log(deleteBook(books));
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");
console.log(sortAlpha(deleteBook(books)));

