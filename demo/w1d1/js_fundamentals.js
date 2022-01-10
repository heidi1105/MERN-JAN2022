// node vs browser js

// ECMA, SCOPE, HOISTING
console.log(firstname)
var firstname="Heidi"
// create memory for variable firstname
// set firstname to Heidi
console.log(firstname)


let temp = "temp"; // globally accessable
function changeTemp(){
    let temp = "newtemp"; // create another variable called temp
    console.log(temp);
}
console.log(temp);
changeTemp();
console.log(temp);


function printNum(){
    for(let i=0;i<10;i++){
        console.log(i)
    }
    //console.log(i)
}
printNum();


// const(cannot be changed) vs let(can be changed) vs var
const arr1 = [1,2,3,4] //store the memory address
console.log(arr1);
arr1.push(10);
arr1.pop();
arr1.pop();
console.log(arr1);
arr1[0] = 10
console.log(arr1);

const pet = {}
pet.name= "Pepper"
pet.age=13
pet.color = "white"

const gift = "airfryer"



// DESTRUCTURING

console.log(pet)
// const age = pet.age;
// console.log(age);

const {age, name, color} = pet;
// const name = pet.name;
// const age = pet.age;
// const color = pet.color;
const eyecolor = pet.eyecolor;

pet.age=1
console.log(name);
console.log(age);
console.log(color);
console.log(eyecolor);
console.log(pet);

const food = ["white pepper", "nuggets", "eggs"]
const food1 = food[0];
const food2 = food[1];

console.log(food1);
console.log(food2);

const [dfood1, dfood2, dfood3] = food;
console.log(dfood1);
console.log(dfood2);
console.log(dfood3);

const [, ddfood2, ddfood3] = food;
console.log(ddfood2);
console.log(ddfood3);

const [,,eggsvar] = food
console.log(eggsvar)


const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };
  
  const { addresses: [address1, address2], addresses } = person;
console.log(address1);
console.log(addresses);



// REST/SPREAD
food.push("pancake");
food.push("cup noodles")
food.push("pizza")
console.log(food);

const [foodcopy1, foodcopy2, ...otherfood] = food;
console.log(foodcopy1)
console.log(foodcopy2)
console.log(otherfood)

const foodcopy = [...food, "pasta"]
console.log(foodcopy)

const petcopy = {nickname:"smartcat", ...pet} // whatever you want to rewrite, add to the last

console.log(petcopy)
console.log(pet);

// ARROW FUNCTION
const changeTemp = () =>{
    let temp = "newtemp"; // create another variable called temp
    console.log(temp);
}


function changeTemp(){
    let temp = "newtemp"; // create another variable called temp
    console.log(temp);
}
console.log(temp);
changeTemp();
console.log(temp);


function printNum(){
    for(let i=0;i<10;i++){
        console.log(i)
    }
    //console.log(i)
}
printNum();



//TERNARY OPERATOR

