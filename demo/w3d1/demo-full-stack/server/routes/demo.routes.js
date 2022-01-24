const DemoController = require("../controllers/demo.controller")

module.exports = (app) => {
    console.log("route")
    app.get('/api', DemoController.index)
    app.post('/api/demos', DemoController.addDemo)  // create
    app.get('/api/demos', DemoController.allDemos) // show all
}