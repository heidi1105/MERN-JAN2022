// IMPORT PACKAGES
const express = require('express');
const app = express();
const cors = require('cors')

// CONFIG MONGOOSE
require("./config/mongoose.config");

// CONFIG EXPRESS
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}))

// ROUTES
require("./routes/demo.routes")(app)

// PORT
app.listen(8000, () => console.log(`Listening on port: 8000`) );
