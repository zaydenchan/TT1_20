var mongoose = require("mongoose")

var orderSchema = mongoose.Schema
(
    {
        userID      : {type: mongoose.Schema.Types.ObjectId, required: true, unique: false},
        status      : {type: String , required: true},
        createdAt   : {type: Date   , default:Date.now}
    }
)

var Order = mongoose.model("Order", orderSchema)

module.exports = Order