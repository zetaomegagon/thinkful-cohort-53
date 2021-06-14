const product = {
    book: {
	title: "Infernal Devices",
	author: "K.W. Jeter",
    },
    priceInCents: 1950,
    state: "Washington",
    tax: 0.065
};

const salesTax = { state: "Washington", tax: 0.065 };
//const sale = { ...product, ...salesTax };

const sale = {
    ...product,
    ...salesTax,
    priceInCents: product.priceInCents * (100 + salesTax.tax)
}

console.log(sale);
