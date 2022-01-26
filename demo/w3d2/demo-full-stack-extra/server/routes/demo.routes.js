const DemoController = require("../controllers/demo.controller")

module.exports = (app) => {
    app.get('/api', DemoController.index)
    app.post('/api/demos', DemoController.addDemo)  // create
    app.get('/api/demos', DemoController.allDemos) // show all
    app.get('/api/demos/:id', DemoController.oneDemo) // show one
    app.put('/api/demos/:id', DemoController.updateDemo) // update 
    app.delete('/api/demos/:id', DemoController.deleteDemo) //delete
    app.post('/api/demos/unique', DemoController.createUniqueDemo)  // create unique
}