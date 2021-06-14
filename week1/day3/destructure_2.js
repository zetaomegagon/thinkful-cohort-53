const author = {
  name: {
    firstName: "Philip",
    surname: "Pullman",
  },
  birthday: "1946-10-19",
};

// The following will print 'undefined'
// since 'firstName' is nested inside
// the 'name' key
//
// const { firstName } = author;
// console.log(firstName);

const {
    name: { firstName }
} = author

console.log(firstName);

