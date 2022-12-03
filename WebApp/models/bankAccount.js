var mongoose = require("mongoose")

var bankAccountSchema = mongoose.Schema
(
    {
        AccountID        : {type: Number , required: false },
        UserID           : {type: Number , required: false },
        Email            : {type: String , required: false},
        AccountType      : {type: String , required: false },
        AcccountBalance  : {type: Number , required: false }
    }
)

var BankAccount = mongoose.model("bankAccount", bankAccountSchema)

module.exports = BankAccount