// Typical use
// getPriceInDollars({
//   name: "Slip Dress",
//   priceInCents: 8800,
//   availableSizes: [0, 2, 4, 6, 10, 12, 16],
// }); //> $88.00

// Missing `priceInCents` key
// getPriceInDollars({
//   name: "Slip Dress",
//   availableSizes: [0, 2, 4, 6, 10, 12, 16],
// }); //> $0.00

// No arguments
// getPriceInDollars(); //> $0.00

const product =    {
    name: "Slip Dress",
    priceInCents: 8800,
    availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
} 

function getPriceInDollars(product = {}) {
    const { priceInCents = 0 } = product;
    
    let price = "$" + (product.priceInCents / 100).toFixed(2);

    return price;
		
}

getPriceInDollars(product);
