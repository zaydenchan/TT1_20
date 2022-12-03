var mongoose = require("mongoose")

var orderItemSchema = mongoose.Schema
(
    {
        productID   : {type: mongoose.Schema.Types.ObjectId, required: true, unique: false},
        orderID     : {type: mongoose.Schema.Types.ObjectId, required: true, unique: false},
        status      : {type: String , required: true},
        createdAt   : {type: Date   , default:Date.now}
    }
)

var OrderItem = mongoose.model("OrderItem", orderItemSchema)

module.exports = OrderItem