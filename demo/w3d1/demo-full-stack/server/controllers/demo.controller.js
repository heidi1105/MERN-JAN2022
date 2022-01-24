const Demo = require("../models/demo.model")

module.exports.index = (req, res) =>{
    res.json({message:"meow"})
}

// SHOW ALL
module.exports.allDemos = (req, res) =>{
    Demo.find()
        .then(demos => res.json(demos))
        .catch(err => res.json(err))
}

// SHOW ONE

// CREATE
module.exports.addDemo = (req, res) =>{
    Demo.create(req.body)
        .then(newDemo => res.json(newDemo))
        .catch(err => res.json(err))
}



// UPDATE

// DELETE