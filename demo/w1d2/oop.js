class Pet{
    constructor(nickname, age){
        this.nickname=nickname;
        this.age = age;
        this.health = 100;
        this.abilities = ["exist", "breathe", "eat", "move", "sleep"]
    }

}

class Cat extends Pet{ //Pet is the parent class
    constructor(nickname, age){
        super(nickname, age);
        this.health = 200;
        this.abilities.push("extra life");
        this.abilities.push("attack people");
        this.abilities.push("eat cables");        
    }
    meow(){
        console.log("Meow!!!!!!")
    }

    eat(item){
        if(item instanceof Food){
            this.health += item.energy
        }else if(item instanceof Toy){
            this.health -= item.energy *100
        }
        console.log(this.nickname + " is eating a " + item.itemName)
    }
}

const pepper = new Cat("Pepper", 13)
console.log(pepper)


class Item{
    constructor(itemName, energy){
        this.itemName = itemName;
        this.energy= energy
    }
}

class Food extends Item{
    constructor(itemName, energy){
        super(itemName, energy)
    }
}

class Toy extends Item{
    constructor(itemName, energy){
        super(itemName, energy)
    }
}

const churu = new Food("churu", 30)
const cable = new Toy("cable", 5 )
console.log(pepper);
pepper.eat(churu);
console.log(pepper)
pepper.eat(cable);
console.log(pepper);




