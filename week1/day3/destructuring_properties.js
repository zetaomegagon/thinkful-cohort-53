const product = {
  title: "The Golden Compass",
  priceInCents: 799,
  author: {
    firstName: "Philip",
    surname: "Pullman",
  },
};

function printTitlePriceAuthor({title,priceInCents,author: {firstName,surname}}) {
    console.log(`The ${title} by ${firstName} ${surname} is ${priceInCents}`);
}

printTitlePriceAuthor(product);
