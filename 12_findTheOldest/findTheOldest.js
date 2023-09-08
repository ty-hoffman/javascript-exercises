let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let oldestAge = 0;
let oldestNames = "";
let currentAge = 0;
peopleObject = {};
peopleArray = [];
const findTheOldest = function(peopleArray) {
    peopleArray.forEach((person)  => {
        if ("yearOfDeath" in person) {
            currentAge = person.yearOfDeath - person.yearOfBirth;
        }
        else {
            currentAge = currentYear - person.yearOfBirth;
        }
        if (currentAge == oldestAge) {
            oldestNames = oldestAge + `, ${person.name}`;
        }
        if (currentAge > oldestAge) {
            oldestNames = person.name;
            oldestAge = currentAge;
        }
    });
    let oldestNamesArray= oldestNames.split(",");
    peopleObject = peopleArray.find(people => oldestNamesArray.includes(people.name));
    return peopleObject;
};
// Do not edit below this line
module.exports = findTheOldest;
