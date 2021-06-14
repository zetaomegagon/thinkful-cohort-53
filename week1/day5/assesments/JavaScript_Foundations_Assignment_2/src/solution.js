/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
    if (price === 0) { return 0; }
    
    const toCents = (priceInCents / 100).toFixed(2);
    return `$${toCents}`;
}


function chooseItemByNameAndSize(products, name, size) {
    let product = null

    if (products == []) { return product; }

    for (let i = 0; i < products.length; i++) {
	let productIth = product[i];
	let productName = productIth.name;
	let productSize = productIth.availableSizes;
	
	
	if (productName === name) {
	    if (productSize === size) {
		let product = productIth;
		return product;
		}
	    }
	}
    }
    return product;
}

function addProductToCart() {}

function calculateTotal() {}

function printReceipt() {}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
