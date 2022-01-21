const ItemController = require("../controllers/items.controller")

module.exports = (app) =>{
    console.log("in routes")
    app.get('/api/items', ItemController.findAllItems)
    app.post('/api/items', ItemController.addItem)
    app.post('/api/items2', ItemController.addItem2)
    app.get('/api/items/:id', ItemController.oneItem)
    app.put('/api/items/:id', ItemController.updateItem)
    app.delete('/api/items/:id', ItemController.deleteItem)
}