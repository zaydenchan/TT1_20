var mongoose = require("mongoose")

var productSchema = mongoose.Schema
(
    {
        id          : {type: mongoose.Schema.Types.ObjectId, required: false, unique: false},
        title       : {type: String , required: true },
        price       : {type: String , required: true },
        description : {type: String , required: false},
        category_id : {type: Number,  required: false},
        image       : {type: String , required: false, unique: false },
        qty         : {type: Number , required: true },
        createdAt   : {type: Date   , default:Date.now}
    }
)

var Product = mongoose.model("Product", productSchema)

module.exports = Product