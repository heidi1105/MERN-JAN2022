const e = require("express");

const obj ={}
obj.name = "object";
obj.quantity = 5;
obj.name="object2"

console.log(obj)

const arr =[1,2,3]
console.log(arr)
arr.push(5)
console.log(arr)

const freezeArr =Object.freeze([1,2,3])
console.log(freezeArr)
//freezeArr.push(5)
// console.log(freezeArr)

const item ={
    itemName: "ps5",
    price: 500
}

const newItem = {...item, price:400}
console.log(item)
console.log(newItem)

const shoppingList = Object.freeze([
    {itemName: "rice cooker", shop: "Amazon", price: 120},  //0
    {itemName: "monitor", shop: "Amazon", price: 20}, //1
    {itemName: "ps5", shop: "BestBuy", price: 500}, //2
    {itemName: "wetfood", shop: "PetSmart", price: 1.29}, //3
    {itemName: "white pepper", shop: "Whole Foods", price: 1.99}, //4
])

shoppingList[0] = 10

shoppingList[0].itemName="Test"
console.log(shoppingList)

const newYearFeast = [...shoppingList, {itemName: "Wagyu steak", shop: "Whole Foods", price: 200}]
console.log(newYearFeast)


//concat
const newYearFeast2 = shoppingList.concat([ {itemName: "steak", shop: "Whole Foods", price: 20}])
console.log(newYearFeast2)


// map
const tempArr = [1,2,3,4,5]
const cube = tempArr.map(e => e**3)
console.log(cube)

const prices = shoppingList.map(e=>e.price )
console.log(prices)

const newYearSale = shoppingList.map(e=> ( {itemName: e.itemName, price: e.price *0.8}))
console.log(newYearSale)

// filter

const newYearSale2 = shoppingList.filter(e => e.price = e.price*0.8) //better not to use filter to change items as it will change the original array
console.log(newYearSale2)

// grab all the items that are less than $100
const cheapItems = shoppingList
    .filter(e=> e.price < 100)
    .map(e=> e.itemName)
console.log(cheapItems)

const cheapItems2 = shoppingList
    .map(e=> e.itemName)    // return only the itemNames without price
    .filter(e=> e.price < 100)
console.log(cheapItems2) // not working!!!!!

console.log(shoppingList)
// grab all the items from Amazon


const items = shoppingList.map(e=> e.itemName)
//console.log(items)



const itemsFreeze = Object.freeze([shoppingList.map(e=> e.itemName)])
console.log(itemsFreeze)
// SORT()

itemsFreeze.sort()
console.log(itemsFreeze)

console.log(prices.sort((a,b) => a-b))

const pItems = shoppingList.filter(e=> e.itemName.includes("p"))
console.log(pItems)