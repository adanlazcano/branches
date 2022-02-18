const btn = document.getElementById("btn");

btn.addEventListener("click", ({ target }) => {
    console.log(target);
});

//Copy object

const person = {
    name: "aanton",
    age: 38,
    skills: ["Programming", "Cooking", "Tennis"],
};

const personC = person;

console.log(personC.skills === person.skills);

const personCopy = JSON.parse(JSON.stringify(person));

console.log(personCopy.skills === person.skills);

personCopy.skills.push("english");

console.log(personCopy);

console.log(person);

// set null result with ||

const getUserName = (_) => {
    return 0;
};

const username = getUserName() || "dom";

console.log(username);

// Searching

const occupations = ["Lawyer", "Doctor", "Programmer", "Chef", "Store Manager"];

const result = occupations.find((o) => o.startsWith("C"));

console.log(result);

//Remove arrat duplicates

const numbers = [5, 10, 5, 20];

console.log([...new Set(numbers)]);

const map = numbers
    .map((item, i, self) => {
        if (self.indexOf(item) === i) return item;
    })
    .filter(Boolean);

console.log(map);

// self Invoking functions

const someComplexValue = ((_) => {
    console.log(20);

    return 10;
})();

console.log(someComplexValue);

// Array copy using spread

const numbersArr = [5, 19, 24, 36];
const arr = numbersArr;

const numbersCopy = [...numbers];

console.log(numbersArr === numbersCopy);
console.log(numbersArr === arr);