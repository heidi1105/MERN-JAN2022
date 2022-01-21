const DemoController = require("./../controllers/demo.controller")

module.exports = app =>{
    app.get("/", DemoController.index)
    app.get("/api/items", DemoController.allItems)
    app.get("/api/items/:id", DemoController.oneItem)
    app.post("/api/items", DemoController.addItem)
    app.put("/api/items/:id", DemoController.updateItem)
    app.delete("/api/items/:id", DemoController.deleteItem)

}