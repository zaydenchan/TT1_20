var express             = require("express")
var User                = require("../../../models/user")
var router              = express.Router()

router.get
(
    "/userModify/remove/:userId/:currentUserId",
    function(request, response)
    {
        User.findByIdAndDelete(request.params.userId).exec
        (
            function(error)
            {
                if (error) 
                {
                    request.flash("error", "Unable to remove user")
                }
            }
        )
        return response.redirect("/private/admin/"+request.params.currentUserId)
    }
)

// router.get
// (
//     "/admin/accessCodeModify/remove/:accessId/:currentUserId",
//     function(request, response)
//     {
//         Access.findByIdAndDelete(request.params.accessId).exec
//         (
//             function(error)
//             {
//                 if (error) 
//                 {
//                     request.flash("error", "Unable to remove")
//                 }
//             }
//         )
//         return response.redirect("/private/admin/"+request.params.currentUserId)
//     }
// )

// router.post
// (
//     "/admin/addaccesscode/:currentUserId",
//     function(request, response)
//     {
//         var newAccessCode = new Access
//         (
//             {
//                 accessCode  : request.body.accessCode,
//                 isUse       : false
//             }
//         )
//         newAccessCode.save
//         (
//             function(error, card)
//             {
//                 if (error)  request.flash("error", "Unable to save access code to db...")
//                 else        request.flash("success", "Successfully added access code to db!")
//             }
//         )
//         return response.redirect("/private/admin/"+request.params.currentUserId)
//     }
// )

module.exports = router