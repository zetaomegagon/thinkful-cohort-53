// JavaScript foundations: Writing readable code
// Instructions

// To complete this Practice problem, you will update the existing functions in src/solution.js to be written in a way that is more readable. Follow the instructions below on how to do so.

// getProductsBySize()
// * Update the function so that it assignes products[i] to a variable. Use that variable instead of calling products[i] multiple times.

// moreThanThreeProducts()
// * Update the function so that it does not explicilty return true or false.

// checkForSizeByName()
// * Update the function so that:

//  - products[i] is assigned to a variable.

//  - It returns false early if there is no product.

//  - It does not explicitly return true or false when checking for the size.

let products = [
  {
    name: "Light Grey Chino Skinny Shorts",
    priceInCents: 1999,
    availableSizes: [28, 30, 32, 34, 38],
  },
  {
    name: "Pink Twill Slim Shirt",
    priceInCents: 1699,
    availableSizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    name: "Black Longline Shirt",
    priceInCents: 1500,
    availableSizes: ["XS", "S", "XL", "XXL"],
  },
];

function getProductsBySize(products, size) {
  const result = [];
    for (let i = 0; i < products.length; i++) {
	const product = products[i];
    for (let j = 0; j < product.availableSizes.length; j++) {
      if (product.availableSizes[j] === size) {
        result.push(product);
      }
    }
  }

  return result;
}

function moreThanThreeProducts(products) {
 return products.length >= 4;
}


function checkForSizeByName(products, name, size) {
  let product = null;

  if (products == []) {
    console.log("empty array case")
    return !products
  }

  for (let i = 0; i < products.length; i++) {
    let productN = products[i];
    if (productN.name === name) {
      product = productN;
      console.log(product);
    }
  }
  let hasSize = product.availableSizes.includes(size);
  console.log(hasSize);
  return hasSize;
}

checkForSizeByName(products,"Black Longline Shirt","XS");