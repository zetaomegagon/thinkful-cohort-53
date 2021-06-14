const parks = [
  { name: "Biscayne", rating: 4.2 },
  { name: "Grand Canyon", rating: 5 },
  { name: "Gateway Arch", rating: 4.5 },
  { name: "Indiana Dunes", rating: 4.1 },
];

let some = parks.some((park) => park.rating <= 5);

console.log(some);

some = parks.some((park) => park.rating >= 5);

console.log(some);

some = parks.some((park) => park.rating > 5);

console.log(some);
