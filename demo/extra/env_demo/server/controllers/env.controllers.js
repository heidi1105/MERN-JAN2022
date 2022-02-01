

module.exports.secretMessage = (req, res) =>{
    res.json({message:process.env.FIRST_SECRET_MESSAGE})
}
