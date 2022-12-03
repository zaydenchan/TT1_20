var express = require("express")
var User    = require("../../models/user")
var Mail    = require("../../models/mail")

var router  = express.Router()

router.post
(
    "/:spaceName",
    function(request, response)
    {
        User.findOne({spaceName: request.params.spaceName}).exec
        (
            function(error, user)
            {
                if (error || !user)
                {
                    if (error)  request.flash("error", "Something went wrong when searching for user...")
                    if (!user)  request.flash("error", "User does not exist.")
                    response.redirect("/../public/" + request.params.spaceName)
                }
                else
                {
                    var newMail = new Mail
                    (
                        {
                            userID  : user._id,
                            name    : request.body.Name,
                            email   : request.body.Email,
                            contact : request.body.Contact,
                            message : request.body.Message
                        }
                    )
                    newMail.save
                    (
                        function(error, mail)
                        {
                            if (error)  request.flash("error"   , "Something went wrong sending mail... Error: " + error)
                            else        request.flash("success" , "Your Message has been sent to " + request.params.spaceName + " successfully!")
                            response.redirect("/../public/" + request.params.spaceName)
                        }
                    )
                }
            }
        )
    }
)

router.get
(
    "/:spaceName/remove/:mailId",
    function(request, response)
    {
        User.findOne({spaceName: request.params.spaceName}).exec
        (
            function(error, user)
            {
                if (error || !user)
                {
                    if (error)  request.flash("error", "Ops... Something went wrong when trying to search for user... Error: " + error)
                    else        request.flash("error", "You cannot delete a message that is not yours!!!")
                    response.redirect("/private/mail")
                }
                else
                {
                    Mail.findById(request.params.mailId).deleteOne
                    (
                        function(error)
                        {
                            if (error)  request.flash("error"    , "Ops... Something went wrong when trying to delete message... Error: " + error)
                            else        request.flash("success"  , "Message removed successfully.")
                            response.redirect("/private/mail")
                        }
                    )
                }
            }
        )
    }
)

module.exports = router