var express = require("express")
var router  = express.Router()
var ensureAuthenticated = require("../../../authentication/authentication").ensureAuthenticated

router.use(ensureAuthenticated)

router.use("/dashboard" , require("./dashboard"))
router.use("/admin"     , require("./admin")    )
router.use("/mail"      , require("./mail")     )

module.exports = router