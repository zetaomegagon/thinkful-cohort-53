authors = [
  "Ursula K. Le Guin",
  "Brandon Sanderson",
  "Terry Pratchett",
  "Neil Gaiman",
  "J. R. R. Tolkien",
];

// const [first,second,third] = authors
// console.log(first);
// console.log(second);
// console.log(third);

const [one,two,three, ...rest] = authors
console.log(one);
console.log(two);
console.log(three);
console.log(rest);
