// option 1
// const Demo = require("../models/demo.model")

// option 2
const {Demo} = require("../models/demo.model")


module.exports.index = (req, res) =>{
    res.json({message:"meow"})
}

// SHOW ALL
module.exports.allDemos = (req, res) =>{
    Demo.find()
        .then(demos => res.json(demos)) //return an arr of obj
        .catch(err => res.json(err))
}

// SHOW ONE
module.exports.oneDemo = (req, res) =>{
    Demo.findOne({_id: req.params.id})
        .then(demo => res.json(demo)) //return an obj
        .catch(err=>res.status(400).json(err))
}

// CREATE
module.exports.addDemo = (req, res) =>{
    Demo.create(req.body)
        .then(newDemo => res.json(newDemo))
        .catch(err => res.status(400).json(err))
}

// UPDATE (SHOW ONE + CREATE)
module.exports.updateDemo = (req, res) =>{
    Demo.findOneAndUpdate({_id: req.params.id}, //find that demo
        req.body, // modified content
        { new: true, runValidators: true } // run validations on update
    )
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}


// DELETE
module.exports.deleteDemo = (req, res) =>{
    Demo.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err=>res.status(400).json(err))
}


// UNIQUE TITLE
module.exports.createUniqueDemo = (req, res) =>{
    Demo.exists({title : req.body.title})
        .then(userExists => {
            if (userExists) { //if userExists ===true --> that title is already created
                // Promise.reject() will activate the .catch() below.
                return Promise.reject('Error Message Goes Here');
            }
            return Demo.create(req.body);
        })
        .then(saveResult => res.json(saveResult))
        .catch(err => res.json(err));
}