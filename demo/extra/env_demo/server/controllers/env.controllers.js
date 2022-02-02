

module.exports.secretMessage = (req, res) =>{
    res.json({message:process.env.SECOND_SECRET_MESSAGE})
}
