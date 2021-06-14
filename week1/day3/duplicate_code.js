const authors = [
  {
    id: 1,
    name: {
      firstName: "Philip",
      surname: "Pullman",
    },
    series: ["His Dark Materials", "Sally Lockhart"],
  },
  {
    id: 2,
    name: {
      firstName: "Terry",
      lastName: "Pratchett",
    },
    series: ["Discworld", "Long Earth"],
  },
];

function getAllSeries(authors) {
  const result = [];
  for (let i = 0; i < authors.length; i++) {
    for (let j = 0; j < authors[i].series.length; j++) {
      result.push(authors[i].series[j]);
    }
  }
  return result;
}
