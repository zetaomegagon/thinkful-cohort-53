const cart = {
    "Court Sneaker": {
        priceInCents: 8800,
        quantity: 1
    }
};


function calculateTotal(cart) {
    let total = 0;

    for (let item in cart) {
        item = cart["item"].replace(" ","")

        console.log(item);
    }

    return total;
}

calculateTotal(cart);