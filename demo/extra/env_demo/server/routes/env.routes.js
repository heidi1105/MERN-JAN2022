const EnvController = require("../controllers/env.controllers")

module.exports = (app) => {

    app.get('/api', EnvController.secretMessage)


}