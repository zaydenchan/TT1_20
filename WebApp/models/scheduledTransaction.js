var mongoose = require("mongoose");

var scheduledTransactionSchema = mongoose.Schema({
  TransactionID: { type: String, required: true, unique: true },
  AccountID: { type: Number, required: true, unique: true },
  ReceivingAccountID: { type: Number, required: true },
  Date: { type: String, required: true },
  TransactionAmount: { type: Number, required: true },
  Comment: { type: String, required: true }
})

var ScheduledTransaction = mongoose.model(
	"ScheduledTransaction",
	scheduledTransactionSchema
);

module.exports = ScheduledTransaction;
