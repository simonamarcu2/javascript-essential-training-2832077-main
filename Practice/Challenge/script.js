import Book from "../Challenge/Book.js";

const guardianAngel = new Book(
  "The Guardian Angel",
  "George Lazar",
  9781408788983,
  15,
  "2018",
  "Stilished",
  267,
  "Thriller",
);

const manuscriptFromAccra = new Book(
  "Manuscript from Accra",
  "Paolo Coleho",
  9781408788983,
  25,
  `2012`,
  "Humanitas",
  189,
  "Manuscript",
);

const yourKids = new Book(
  "Hold On To Your Kids",
  "Gabor Mate & Gordon Neufeld",
  9781408788983,
  30,
  `2004`,
  "Vermilion",
  332,
  "Kids",
);



console.log(guardianAngel);
console.log(manuscriptFromAccra);
console.log(yourKids);
