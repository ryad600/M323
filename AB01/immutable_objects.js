const name = "Tom";

const person = {
    name: "Tom",
    age: 32,
    student: false
};

// add attribute
const updatedPerson = {
    ...person,
    car: "Honda"
};

// change attribute
const changedPerson = {
    ...updatedPerson,
    age: updatedPerson.age + 1
};

// delete an attribute
const { student, ...otherChangedPerson } = changedPerson;


