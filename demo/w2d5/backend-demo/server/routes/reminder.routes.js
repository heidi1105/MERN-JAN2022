const ReminderController = require("../controllers/reminder.controller")

module.exports = app =>{
    console.log("server/routes")
    app.get("/", ReminderController.index)
    app.get("/api/reminders", ReminderController.allReminders)
    app.post("/api/reminders", ReminderController.createReminder)
    app.get("/api/reminders/:id", ReminderController.oneReminder)
    app.put("/api/reminders/:id", ReminderController.updateReminder)
    app.delete("/api/reminders/:id", ReminderController.deleteReminder)
    app.post("/api/reminders2", ReminderController.createReminder2)
}