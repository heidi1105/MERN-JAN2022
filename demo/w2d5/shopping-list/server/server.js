const express = require("express")
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}))

console.log("server.js")
const Routes = require("./routes/items.routes");
Routes(app)

app.listen(8000, ()=>console.log("server is running on port 8000"))