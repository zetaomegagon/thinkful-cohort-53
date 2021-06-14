const author = {
  name: {
    firstName: "Philip",
    surname: "Pullman",
  },
  birthday: "1946-10-19",
};

function printAuthorAndBirthday(author) {
  const {
    name: { firstName, surname },
    birthday,
  } = author;

  console.log(`${firstName} ${surname} was born on ${birthday}`);
}

printAuthorAndBirthday(author);
