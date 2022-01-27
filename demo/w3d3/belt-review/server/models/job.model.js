const mongoose = require('mongoose')


const JobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters"]  
    },
    salary: {
        type: Number,
        required: [true, "salary is required"],
        min: [100000, "Job should pay more. Try 6 figures"]       
    },
    company:{
        type: String,
        required: [true, "Company is required"],
        minlength: [2, "Company must be at least 2 characters"]  
    },
    remote:{
        type: Boolean
    },
}, {timestamps:true})


module.exports.Job = mongoose.model('Job', JobSchema);

