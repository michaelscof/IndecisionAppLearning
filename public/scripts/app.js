'use strict';

var nameVar = 'prem';
var nameVar = 'abhishek';
console.log(nameVar);

var nameLet = 'prem';
nameLet = 'abhishek';
console.log(nameLet);

var nameConst = 'prem';
console.log(nameConst);

//Block level scope - let and const
var fullName = 'Prem Kagrani';
var firstName = void 0;

function getFirstName() {
    if (fullName) {
        firstName = fullName.split(' ')[0];
        return firstName;
    }
}

firstName = getFirstName();
console.log(firstName);
