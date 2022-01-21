// 1. IMPORT EXPRESS
const express = require("express")
const app = express()
const port = 8000
const faker = require('@faker-js/faker')



// 1.1 SETUP FOR POST METHOD
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// 2. LOGIC FOR ROUTES
// app.get, app.post, app.put, app.delete
app.get("/", (req, res)=>{
    res.json({
        message:"Pepper",
        color: "white",
        age: 13
    })
})

app.get("/world", (req, res)=>{
    res.json("worlddddddd")
})

app.get("/api/items", (req, res)=>{
    res.json(shoppingList)
})

//grab one item 
app.get("/api/items/:id" , (req, res)=>{
    const id = req.params.id
    res.json(shoppingList[id])
})

app.post("/api/items", (req, res)=>{
    shoppingList.push(req.body)
    res.json({status: "create ok"})
})

//update one item
app.put("/api/items/:id" , (req, res)=>{
    const id = req.params.id
    shoppingList[id] = req.body
    res.json({status: "update ok"})
})

app.delete("/api/items/:id" , (req, res)=>{
    const id = req.params.id
    shoppingList.splice(id, 1)
    res.json({status: "Delete ok"})
})

app.get("/api/faker/randomName", (req, res)=>{
    let randomName = faker.name.firstName()
    res.json({randomName: randomName})
})

// 3. LISTEN TO THE PORT
app.listen( port, () => console.log(`Listening on port: ${port}`) );



