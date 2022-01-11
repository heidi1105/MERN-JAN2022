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
    {itemName: "portable monitor", shop: "Amazon", price: 200}, //1
    {itemName: "ps5", shop: "BestBuy", price: 500}, //2
    {itemName: "wetfood", shop: "PetSmart", price: 1.29}, //3
    {itemName: "white pepper", shop: "Whole Foods", price: 1.99}, //4
])

const newYearFeast = [...shoppingList, {itemName: "Wagyu steak", shop: "Whole Foods", price: 200}]
console.log(newYearFeast)


//concat
const newYearFeast2 = shoppingList.concat([ {itemName: "steak", shop: "Whole Foods", price: 20}])
console.log(newYearFeast2)

// slice
const newYearSale = [...shoppingList.slice(3) ]
console.log(newYearSale)

console.log(newYearFeast2)
const trySplice = [...newYearFeast2.splice(3)]
console.log(trySplice)
console.log(newYearFeast2)


//splice -- change the original array
const array=[1,2,3,4,5]; // const -- if it is array/object
console.log(array.splice(2));

//slice
const array2=[1,2,3,4,5]
console.log(array2.slice(2));

console.log("----after-----");
console.log(array);
console.log(array2);

// ************************* CALLBACK *******************

const callbackMessage = (msg) =>{
    console.log("Call back message: "+msg)
}

const callbackMessage2 =(msg)=>{
    console.log("Call back message2: "+msg)
}

const parentFunction = (callback) =>{
    callback("Call back from parent")
}

parentFunction(callbackMessage)
parentFunction(callbackMessage2)


// setTimeout( function() { 
//     console.log("start") 
//   }, 3000 );
      
//   console.log("end");
  
  
const tempArr = [1,2,3,4,5]
const square = tempArr.map(num=> num*num ) // create a copy of tempArr, change each item
console.log(tempArr)
console.log(square)

const evenArr = tempArr.filter(element => element %2 ===0) // add conditions to filter items
console.log(evenArr)
