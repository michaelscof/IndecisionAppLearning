const square = function(x){
    return x*x;
}

console.log(square(5));


//Arrow function
const squareArrow = (x) => x*x;
console.log(squareArrow(4));

//Arrow function to get first name
const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName("Prem Kagrani"));
