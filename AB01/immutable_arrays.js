const foods = [
    {id: 1, fruit: "Pineapple"},
    {id: 2, fruit: "Apple"}
];

// add food
const updatedFood = [
    ...foods,
    {id: 3, fruit: "Banana"}
];

//edit food
const upUpdatedFood = updatedFood.map(changeFruit);
function changeFruit(food) {
    if (food.id === 3) {
        return {...food, fruit: "Pear"};
    }
    else {
        return food;
    }
}

// delete food with smallest id
// alles was 
const deletedFood = upUpdatedFood.filter((food) => {
    return food.id !== 2;
});

//short version of deletedFood
const altDeletedFood = upUpdatedFood.filter((food) => food.id !== 2)

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

const total = reviews.reduce((a,g) => a + g);

const average = total / reviews.length;

// ich verstehe das nicht ganz
const groupByGrade = (review, digit) => {
    //{} before = is destructing
    const { good = 0, ok = 0, bad = 0} = review;
    if (digit >= 4) {
        return { ...review, good: good + 1}
    }
    else if (digit >= 2.5) {
        return { ...review, ok: ok + 1}
    } 
    else {
        return { ...review, bad: bad + 1}
    }
}

const gradeGroups = reviews.reduce(groupByGrade, {});

gradeGroups