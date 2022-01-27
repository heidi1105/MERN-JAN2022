const {Job} = require("../models/job.model")

module.exports.index = (req, res) =>{
    res.json({message:"Hello World"})
}

// SHOW ALL
module.exports.allJobs = (req, res) =>{
    Job.find()
        .then(jobs => res.json(jobs))
        .catch(err=> res.status(400).json(err))
}

// SHOW ONE
module.exports.oneJob = (req, res) =>{
    Job.findOne({_id: req.params.id})
        .then(job => res.json(job))
        .catch(err=> res.status(400).json(err))
}

// CREATE
module.exports.addJob = (req, res) =>{
    // you could destructure req.body 
    // make sure frontend send everything you need
    Job.create(req.body)
        .then(newJob => res.json(newJob))
        .catch(err=> res.status(400).json(err))
}

// UPDATE
module.exports.updateJob = (req, res) =>{
    Job.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(job => res.json(job))
        .catch(err=> res.status(400).json(err))
}


// DELETE
module.exports.deleteJob = (req, res) =>{
    Job.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err=> res.status(400).json(err))
}