var ObjectID = require('mongodb').ObjectID


const express = require("express")
const router = express.Router()
var ScheduledTransaction = require("../../models/ScheduledTransaction")

router.get("/", function (request, response) {
  response.json("This is a JSON status code for the ScheduledTransactions api")
})

// Return a list of transaction details of a user from the Scheduled Transactions table
router.get("/getScheduledTransactions/:accountId", async (req, res) => {
  try {
    const transactions = await ScheduledTransaction.find({
      AccountID: req.params.accountId
    })
    res.json(transactions)
  } catch (err) {
    res.status(500).send({
      message: err.message || "An error has occurred."
    })
  }
})

// Delete scheduled transactions from the Scheduled Transactions table
router.delete("/deleteScheduledTransaction", async (req, res) => {
  console.log(req.body)
  try {
    // const transactions = await ScheduledTransaction.deleteOne({
    // 	TransactionID: req.body.transactionId,
    // 	AccountID: req.body.accountId,
    // });
    res.json({
      message: "Delete successful!"
    })
  } catch (err) {
    res.status(500).send({
      message: err.message || "An error has occurred."
    })
  }
})

// Insert transaction details of a user into the Scheduled Transactions table
router.post("/insertScheduledTransactions", async (req, res) => {
  console.log(req.body)
  try {
    const transaction = await ScheduledTransaction.create({
      TransactionID: new ObjectId(),
      AccountID: req.body.accountId,
      ReceivingAccountID: req.body.receivingAccountId,
      Date: req.body.date,
      TransactionAmount: req.body.TransactionAmount,
      Comment: req.body.comment
    })
    res.json(transaction)
  } catch (err) {
    res.status(500).send({
      message: err.message || "An error has occurred."
    })
  }
})

module.exports = router

// {
//     "AccountID": 111,
//     "ReceivingAccountID": 222,
//     "Date": "2022-11-08T04:00:00.000Z",
//     "TransactionAmount": 111.11,
//     "Comment": "Pocket Money"
// }
