const author = {
  name: {
    firstName: "Philip",
    surname: "Pullman",
  },
  birthday: "1946-10-19",
};

const {
  name: { firstName },
} = author;

console.log(firstName);

// name isn't defined anywhere
// so causes a ReferenceError
//
console.log(name);
//
// $ node destructure_3.js
//
// /home/ebeale/gits/thinkful-cohort-53/week1/day3/destructure_3.js:14
// console.log(name);
//             ^

// ReferenceError: name is not defined
//     at Object.<anonymous> (/home/ebeale/gits/thinkful-cohort-53/week1/day3/destructure_3.js:14:13)
//     at Module._compile (internal/modules/cjs/loader.js:1068:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
//     at Module.load (internal/modules/cjs/loader.js:933:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:774:14)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
//     at internal/main/run_main_module.js:17:47

