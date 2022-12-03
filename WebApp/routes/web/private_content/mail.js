var express             = require("express")
var Mail                = require("../../../models/mail")

var router = express.Router()

router.get
(
    "/",
    function(request, response)
    {        
        Mail.find
        (
            { userID:request.user._id }
        ).exec
        (
            function(error, mails)
            {
                if (error) request.flash("error", "Ops! Something went wrong when searching for messages...")
                response.render("private/mail", {mails : mails})
            }
        )
    }
)

module.exports = router