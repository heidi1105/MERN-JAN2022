// IMPORT PACKAGES
const express = require('express');
const app = express();
const cors = require('cors')

// CONFIG MONGOOSE
require("./config/mongoose.config");

// CONFIG EXPRESS
app.use(cors()) // Having 2 localhost port to communicate
app.use(express.json(), express.urlencoded({extended:true}))  // POST METHOD
 
// ROUTES OPTION 1
require("./routes/demo.routes")(app)
// ROUTES OPTION 2
// const Routes = ("./routes/demo.routes")
// Routes(app)

// PORT
app.listen(8000, () => console.log(`Listening on port: 8000`) );
