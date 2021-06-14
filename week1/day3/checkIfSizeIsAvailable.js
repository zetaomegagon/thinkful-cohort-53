const product =  {
    name: "Slip Dress",
    priceInCents: 8800,
    availableSizes: [0, 2, 4, 6, 10, 12, 16],
};

const product2 = {
    name: "Slip Dress",
    priceInCents: 8800,
};

// last test is no args

// `size` is a number between 0 and 16.
function checkIfSizeIsAvailable(product = {}, size) {
    const { availableSizes = [] } = product;
    const sizes = availableSizes;
    
    if (product && size) {
	for (let i = 0; i < sizes.length; i++) {
	    if (sizes[i] === size) {
		console.log(true);
		return true;
	    }
	}
    }
    console.log(false);
    return false;
}

checkIfSizeIsAvailable(product,10);

checkIfSizeIsAvailable(product2,10);

checkIfSizeIsAvailable(10);

checkIfSizeIsAvailable();
