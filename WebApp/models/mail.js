var mongoose = require("mongoose")

var mailSchema = mongoose.Schema
(
    {
        userID      : {type: mongoose.Schema.Types.ObjectId, required: false, unique: false},
        name        : {type: String , required: false},
        email       : {type: String , required: false},
        contact     : {type: String , required: false},
        message     : {type: String , required: false},
        createdAt   : {type: Date   , default:Date.now}
    }
)

var Mail = mongoose.model("Mail", mailSchema)

module.exports = Mail