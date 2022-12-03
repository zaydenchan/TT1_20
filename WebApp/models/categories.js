var mongoose = require("mongoose")

//Single user can have many cards (text, image, links, documents, videos)
var categorySchema = mongoose.Schema
(
    {
        name        : {type: String , required: true },
        description : {type: String , required: true },
        image       : {type: String , required: false, unique: false },
        createdAt   : {type: Date   , default:Date.now}
    }
)

var Category = mongoose.model("Category", categorySchema)

module.exports = Category