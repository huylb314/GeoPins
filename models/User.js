const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema({
    name: String,
    email: String,
    picture: String
})

module.exports = mongoose.model("User", UserScheme)