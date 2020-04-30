//1. Declare a variable named scores that is initialized to an array 
let scores = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2019-04-22",
        passed: true
    },
];

//2. Declare a function named addScore
const addScore = (array, newName, newScore, newDate) => {
    let newObject = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    }
    array.push(newObject);
}
//3. Declare a function named deleteScoreByIndex
const deleteScoreByIndex = (array, index) => {
    array.splice(index, 1);
};

//4. Declare a function named deleteScoreByName
const deleteScoreByName = (array, name) => {
    let index = array.findIndex(person => {
        return person.name === name;

    })
    array.splice(index, 1);
};

//5. Declare a function named editScore
const editScore = (array, index, score) => {
    let passed = null;
    if (score >= 60) {
        passed = true;
    } else {
        passed = false;
    }
    array[index].score = score;
    array[index].passed = passed;
}
//6. Declare a function named findScoreByName
const findScoreByName = (array, name) => {
    return array.find((person) => {
        return person.name === name;
    })
}
//7. Declare a function named findLowestScore
const findLowestScore = (array) => {
    let currentLowestScore = array[0];
    array.forEach((person) => {
        if (person.score < currentLowestScore.score) {
            currentLowestScore = person;
        }
    })
    return currentLowestScore;
}
//8. Declare a function named findAverageQuizScore
const findAverageQuizScore = (array) => {
    let currentScores = 0;
    for (let score of array) {
        currentScores += score;
    }
}
//9. Declare a function named filterScores
//10. Declare a function named sortScoresAsc
//11. Declare a function named sortScoresDsc

console.log(scores);
addScore(scores, "Janice", 30, "2020-04-29");
console.log(scores);
// deleteScoreByIndex(scores, 1);
// console.log(scores);
deleteScoreByName(scores, "Janice");
console.log(scores);
editScore(scores, 2, 30);
console.log(findScoreByName(scores, "Jill"));
console.log(findLowestScore(scores));



