// revision (const, let)
for(let i=0;i<10;i++){
    //console.log(i)
}

// destructuring
const obj = {
    nickname: "object",
    quantity: 5
}

const {nickname, quantity} = obj;

const arr1 = [1,2,3,4,5]
const [,,three,,five] = arr1;

// rest/spread
const objcopy = {...obj, nickname: "new object"}
console.log(objcopy)

const arrCopy = [...arr1, 10]
console.log(arr1)
console.log(arrCopy)

// arrow functions
// anonymous functions
function printHello(){
    console.log("Hello");
}


const printHelloArrow = () =>{
    console.log("Hello from arrow function")
}

const printHelloArrow2 = () => console.log("Hello from arrow function")

printHello();
printHelloArrow();
printHelloArrow2();

function add(a,b){
    return a+b;
}

const addArrow = (a,b) => a+b


// const addArrow = (a,b) => a+b   

console.log(add(1,5));
console.log(addArrow(1,5));



// ternary operator

let num = 3;
if(num > 5){
    console.log("This is larger than 5")
}else{
    console.log("This is smaller than 5")
}

num > 5?
    console.log("This is larger than 5"): // if
    console.log("This is smaller than 5") //else


num < 5 && console.log("This is only the if without else")

// OOP (Object Oriented Programming)
class Pet{
    constructor(nickname, age){
        this.nickname = nickname; // this.  --> the attribute inside class 
        this.age = age;
        this.health = 100;
        this.abilities = ["exist", "breathe", "eat", "move", "sleep"]
    }
    eat(){
        this.health += 10;
        console.log(this.nickname + " is eating something.")
    }
    
}

const pikachu = new Pet("Pikachu", 24)
console.log(pikachu);
pikachu.eat();
console.log(pikachu);

class Cat extends Pet{
    constructor(nickname, age){
        super(nickname, age);
        this.health = 200;
        this.abilities.push("extra life");
        this.abilities.push("attack people");
        this.abilities.push("eat cables");
    }
    meow(){
        console.log("Meow!!!!!!!!!")
    }
}

const pepper = new Cat("Pepper", 13)
console.log(pepper);
pepper.meow();
pepper.eat();

