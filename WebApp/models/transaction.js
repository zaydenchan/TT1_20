var mongoose = require("mongoose")

var transactionSchema = mongoose.Schema({
  transactionID: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false },
  bankAccountID: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false },
  recipientAccountID: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false },
  amount: { type: Number, required: true },
  comment: { type: String, required: false },
  date: { type: Date, default: Date.now }
})

var Transaction = mongoose.model("transaction", transactionSchema)

module.exports = Transaction
