'use strict';

//arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(43, 23));

//this keyword - no longer bound with arrow functions 

var user = {
    name: "Prem Kagrani",
    cities: ['Lucknow', 'Gurgaon', 'Bangalore'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach(function (city) {
            console.log(_this.name + " has lived in " + city);
        });
    },
    printPlaces: function printPlaces() {
        return this.cities.map(function (city) {
            return city + " is beautiful";
        });
    }
};
user.printPlacesLived();
console.log(user.printPlaces());

//Challenge multiply

var multiplier = {
    numbers: [4, 5, 2],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
