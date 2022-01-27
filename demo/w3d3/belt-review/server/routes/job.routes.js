const JobController = require("../controllers/job.controller")

module.exports = (app) => {
    app.get('/api', JobController.index)
    app.get('/api/jobs', JobController.allJobs) //show all
    app.get('/api/jobs/:id', JobController.oneJob) //show one
    app.post('/api/jobs', JobController.addJob) //create
    app.put('/api/jobs/:id', JobController.updateJob) //update
    app.delete('/api/jobs/:id', JobController.deleteJob) //delete
}