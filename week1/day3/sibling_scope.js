const DISCOUNT_PERCENTAGE = 0.15;

const product = {
    name: "Black Longline T-Shirt",
    priceInCents: 1500,
    availableSizes: ["XS", "S", "XL", "XXL"],
};

if (DISCOUNT_PERCENTAGE > 0) {
    
    const multiplier = 1 - DISCOUNT_PERCENTAGE;
    // first declaration of 'price'
    const price = product.priceInCents * multiplier;
    
    console.log(price);
    
} else {
    // second declaration of 'price'
    const price = product.priceInCents;
    console.log(price);
    
}
