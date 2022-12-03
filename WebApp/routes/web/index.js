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
router.use("/"          , require("./home")             ) //FrontEND APIs
router.use("/private"   , require("./private_content/index")  ) //CARD DATA APIs
router.use("/uploads"   , require("./uploads").router   )

module.exports = router