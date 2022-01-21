# MongoDB SHELL command
### Database
- `show dbs` : showing all database
- `use firstDB` : create & switch to the db
- `db.dropDatabase()` : switch to the db and drop database

### Collections (Table)
- `show collections` :show all tables
- `db.createCollection('items')` : create a table
- `db.items.drop()` : drop a table

### Documents (Fields)
- `db.items.insert({name: "TV", price: 899, size:{length: 60, height: 50}})` 


### Retreive Data from dbs
- `db.items.find()`  : can add .pretty()
- `db.items.find({price: {$lt: 100}})` : find all fields with the price less than 100
- `$lt` : less than  `$gt` : greater than `$and` : 
- `db.items.find({$and: [{price: {$lt:100}}, {price:{$gt:10}}]})`  
- `db.items.findOne({name:"toy"})`

### Update
- `db.item.update({}, {$addToSet:{shops: ["BestBuy","Amazon", "Walmart"]}})` : Only update one item
- `db.item.updateMany({}, {$addToSet:{shops: ["BestBuy","Amazon", "Walmart"]}})`
- `db.item.update({name:"games"}, {$push: {shops: 'gamestop'}})`
- `db.item.update({name:"games"}, {$pull: {shops: 'gamestop'}})`
- `db.item.updateMany({}, {$set: {rating: 10}})`
- `db.item.updateMany({}, {$inc: {rating: 1}})`
- `db.item.updateMany({}, {$rename: {'rating': 'stock'}})`
- 

### Delete
- `db.item.deleteMany({price: {$gt: 100}})`
- `db.item.deleteOne({})`
- `db.item.updateMany({}, [{$unset: ['stock']}])`


## REMARKS
- $push adds items in the order in which they were received. Also, you can add the same items several times.

- $addToSet adds just unique items, but the order of items is not guaranteed.

- remove, deleteOne and findOneAndDelete all works.

- $unset removes the column

- $set adds to set