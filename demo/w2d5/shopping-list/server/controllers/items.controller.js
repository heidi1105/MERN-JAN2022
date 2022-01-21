const Item = require('../models/item.model')

//GET ALL ITEMS
module.exports.findAllItems = (req, res) =>{
    console.log("in controller")
    Item.find()
        .then(allItems => res.json({items: allItems}))
        .catch(err=> res.json({message: 'Something went wrong', error: err}))
}

// CREATE ONE
module.exports.addItem = (req, res) =>{
    Item.create(req.body)
        .then(newItem => res.json({item: newItem}))
        .catch(err=> res.json({message: 'Something went wrong', error: err}))
}


module.exports.addItem2 = (req, res) =>{
    const newItem = new Item(req.body)
    newItem.save()
        .then(newItem => res.json({item: newItem}))
        .catch(err=> res.json({message: 'Something went wrong', error: err}))
}

// FIND ONE
module.exports.oneItem = (req, res) =>{
    Item.findOne({_id: req.params.id})
        .then(item => res.json({item: item}))
        .catch(err=> res.json({message: 'Something went wrong', error: err}))
}

//update
module.exports.updateItem = (req, res) =>{
    Item.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            { new: true, runValidators: true }
        )
        .then(result => res.json({result: result}))
        .catch(err=> res.json({message: 'Something went wrong', error: err}))
}

// deleteOne / remove
module.exports.deleteItem = (req, res) =>{
    Item.remove({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err=> res.json({message: 'Something went wrong', error: err}))
}