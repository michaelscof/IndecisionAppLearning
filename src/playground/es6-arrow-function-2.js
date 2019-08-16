//arguments object - no longer bound with arrow functions

const add = (a,b) =>{
    //console.log(arguments);
    return a+b;
}

console.log(add(43,23));


//this keyword - no longer bound with arrow functions 

const user = {
    name : "Prem Kagrani",
    cities : ['Lucknow','Gurgaon','Bangalore'],
    printPlacesLived(){
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach( (city) => {
            console.log(this.name + " has lived in " + city);
        })
    },
    printPlaces(){
        return this.cities.map( (city) => city + " is beautiful");
    }
}
user.printPlacesLived();
console.log(user.printPlaces());

//Challenge multiply

const multiplier = {
    numbers : [4,5,2],
    multiplyBy : 5,
    multiply(){
        return this.numbers.map( (number) => number*this.multiplyBy);
    }
}
console.log(multiplier.multiply());