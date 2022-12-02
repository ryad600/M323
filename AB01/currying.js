const R = require("./ramda.min.js");
/*
const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
  ];

const resultAnswer = (student) => {
    function resultAnswerName(name) {
        return
    }
    return resultAnswerName;
}
console.log(studentGrades.map(resultAnswer()));
*/

const names = [ "Bernt", "Bob", "Albert"];

const greeting = () => {
    return (name) => {
        return (grade) => {
            if (grade >= 90) {
                return`Good job ${name}, you've got an A`
            }
            if (grade >= 80) {
                return `Good job ${name}, you've got a `
            }
        }
    }
}

names.map((name) => greeting());