var express = require("express")
var router  = express.Router()

//error and info middleware
router.use
(
    function(request, response, next)
    {
        response.locals.currentUser = request.user
        response.locals.error       = request.flash("error")
        response.locals.info        = request.flash("info")
        response.locals.success     = request.flash("success")
        response.locals.refresh     = request.flash("refresh")
        next()
    }
)

//enable endpoints with prefix "/"
router.use("/users" , require("./users"))
router.use("/cart"  , require("./cart"))
router.use("/mail"  , require("./mail"))
router.use("/scheduledTransactions", require("./scheduledTransactions"))

module.exports = router