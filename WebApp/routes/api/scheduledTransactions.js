const express = require("express");
const router = express.Router();
var ScheduledTransaction = require("../../models/ScheduledTransaction");

router.get("/", function (request, response) {
	response.json("This is a JSON status code for the ScheduledTransactions api");
});

// Return a list of transaction details of a user from the Scheduled Transactions table
router.get("/getScheduledTransactions", async (req, res) => {
	try {
		const transactions = await ScheduledTransaction.find();
		res.json(transactions);
	} catch (err) {
		res.status(500).send({
			message: err.message || "An error has occurred.",
		});
	}
});

// Delete scheduled transactions from the Scheduled Transactions table
router.delete("/deleteScheduledTransaction", async (req, res) => {
	try {
    await ScheduledTransaction.deleteOne({
			TransactionID: req.body.transactionId,
			AccountID: req.body.accountId,
		});
		res.json({
      message: "Delete successful!"
    });
	} catch (err) {
		res.status(500).send({
			message: err.message || "An error has occurred.",
		});
	}
});

module.exports = router;
