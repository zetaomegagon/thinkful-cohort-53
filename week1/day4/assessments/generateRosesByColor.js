function generateRosesByColor(colors) {
  let result = [];

  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    let rose = addColorToPlant({ name: "Rose" }, color);
    result.push(rose);
  }
  console.log("The results:")
  console.log(result);
  return result;
}

function addColorToPlant(plant, color) {
  plant.color = color;
  console.log("The plants:")
  console.log(plant);
  return plant;
}

const colors = ["Red", "Yellow"];

const plant = [
  { name: "Rose", color: "" },
  { name: "Rose", color: "" },
];

generateRosesByColor(colors);