var nameVar = 'prem';
var nameVar = 'abhishek';
console.log(nameVar);


let nameLet = 'prem';
nameLet = 'abhishek';
console.log(nameLet);


const nameConst = 'prem';
console.log(nameConst);


//Block level scope - let and const
const fullName = 'Prem Kagrani';
let firstName;

function getFirstName(){
    if(fullName){
        firstName = fullName.split(' ')[0];
        return firstName;
    }
}

firstName = getFirstName();
console.log(firstName);
