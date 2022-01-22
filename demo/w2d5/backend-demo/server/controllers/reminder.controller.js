const Reminder = require("../models/reminder.model")

module.exports.index = (req, res) =>{
    res.json("Hello")
}

// find all
module.exports.allReminders = (req, res) =>{
    Reminder.find()
        .then(allItems=>{
            res.json({items: allItems})
            })
        .catch(err=>res.json({message: "Something went wrong", error: err}))
}

// Create reminder
module.exports.createReminder = (req, res) =>{
    Reminder.create(req.body)
        .then(newReminder => res.json({result: newReminder}))
        .catch(err=>res.json({message: "Something went wrong", error: err}))
        
}

// create reminder 2 (alternative)
module.exports.createReminder2 = (req, res) =>{
    const newReminder = new Reminder(req.body) // instantiate a Reminder according to model (not in dbs)
    newReminder.save()
        .then(newReminder => res.json({result: newReminder}))
        .catch(err=>res.json({message: "Something went wrong", error: err}))
        
}


// find one
module.exports.oneReminder = (req, res) =>{
    Reminder.findOne({_id:req.params.id })
        .then(reminder => res.json({reminder: reminder}))
        .catch(err=>res.json({message: "Something went wrong", error: err}))   
}


// Update a reminder (findOne + create)
module.exports.updateReminder = (req, res) =>{
    Reminder.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        { new: true, runValidators: true })
        .then(reminder => res.json({reminder: reminder}))
        .catch(err=>res.json({message: "Something went wrong", error: err})) 
}


// delete a reminder
module.exports.deleteReminder = (req, res) =>{
    Reminder.deleteOne({_id:req.params.id })
        .then(result => res.json({result: result}))
        .catch(err=>res.json({message: "Something went wrong", error: err}))   
}