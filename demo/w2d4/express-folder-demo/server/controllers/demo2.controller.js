let shoppingList=[
    {itemName: "rice cooker", shop: "Amazon", price: 120},  //0
    {itemName: "monitor", shop: "Amazon", price: 20}, //1
    {itemName: "ps5", shop: "BestBuy", price: 500}, //2
    {itemName: "wetfood", shop: "PetSmart", price: 1.29}, //3
    {itemName: "white pepper", shop: "Whole Foods", price: 1.99}, //4
]

module.exports ={
    index: (req, res) =>{
        res.json({
            message:"Pepper",
            color: "white",
            age: 13
        })
    },
    allItems : (req, res)=>{
        res.json(shoppingList)
    }, 
    addItem : (req, res)=>{
        shoppingList.push(req.body)
        res.json({status: "create ok"})
    },
    updateItem : (req, res)=>{
        const id = req.params.id
        shoppingList[id] = req.body
        res.json({status: "update ok"})
    },
    deleteItem : (req, res)=>{
        const id = req.params.id
        shoppingList.splice(id, 1)
        res.json({status: "Delete ok"})
    }

}

