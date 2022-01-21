// IMPORT EXPRESS
const express = require("express")
const app = express()

// Express for post method
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const Routes = require("./routes/demo.routes")
Routes(app)




app.listen( 8000, ()=> console.log("Listening on port: 8000"))