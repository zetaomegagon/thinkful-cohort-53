const cart = {
  "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
  "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 },
};

function calculateCartTotal(cart) {
  // calculateCartTotal(object) -> int
  // - consumes: cart
  // - returns: totalInCents
  //
  let totalInCents = 0;

  if (cart.length === 0) {
    return totalInCents;
  }

  for (product in cart) {
    let thisProduct = cart[product];
    let productQuantity = thisProduct.quantity;
    let productPrice = thisProduct.priceInCents;
    totalInCents = totalInCents + productQuantity * productPrice;
  }
  return totalInCents;
}

calculateCartTotal(cart);
