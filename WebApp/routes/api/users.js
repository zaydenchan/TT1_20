var fs      = require("fs")
var path    = require("path")
var crypto  = require("crypto")
var multer  = require("multer")
var express = require("express")
var User    = require("../../models/user")

var storage = multer.diskStorage
(
    {
        destination : function(request, file, callback)
        {
            let dir         = "./uploads"
            const mimetype  = "" + file.mimetype

            //Access directory, create if none present
            fs.access
            (   dir, 
                function(error)
                {
                    //error here means directory does not exist, attempt to create
                    if (error)
                        fs.mkdir
                        (
                            dir,
                            function(error)
                            {
                                if (error)  console.log("Unable to create directory: "      + dir)
                                else        console.log("Successfully created directory: "  + dir)
                            }
                        )
                }
            )
            
            if (mimetype.includes("image/"))            dir += "/images/"
            else if (mimetype.includes("audio/"))       dir += "/audios/"
            else if (mimetype.includes("video/"))       dir += "/videos/"
            else if (mimetype.includes("application/")) dir += "/documents/"
            else if (mimetype.includes("text/"))        dir += "/webpages/"
            else                                        callback({ error: 'Mime type not supported' })
            
            //Access file type storage directory, create if none present
            fs.access
            (   dir, 
                function(error)
                {
                    if (error)
                        fs.mkdir
                        (
                            dir,
                            function(error)
                            {
                                if (error)  console.log("Unable to create directory: "      + dir)
                                else        console.log("Successfully created directory: "  + dir)
                            }
                        )
                }
            )
            callback(null, dir)
        },
        filename    : function(request, file, callback)
        {
            //Create a unique file hash for uploaded files
            crypto.pseudoRandomBytes
            (
                16, 
                function(error, raw)
                {
                    callback
                    (
                        null,
                        raw.toString('hex') + 
                        Date.now() + 
                        path.extname(file.originalname)
                    )
                }
            )
        }
    }
)

var upload = multer({ storage: storage })

var router  = express.Router()

//All endpoints in this file have prefix "/" from index.js
router.get
(
    "/", 
    function(request, response)
    {
        response.json("This is a json status code for the users api")
    }
)

router.post
(
    "/updateprofile",
    upload.any(),
    async function(request, response)
    {
        let removeprofilepic    = false      
        const user              = await User.findById(request.user._id)
        const oldprofilepic     = user.profilePic
        user.username           = request.body.username
        user.email              = request.body.email        

        if (request.files && request.files.length)
        {
            user.profilePic = request.files[0].path
            removeprofilepic = true
        }
        try
        {
            let saveProfile = await user.save()
            if (removeprofilepic && oldprofilepic ) fs.unlinkSync('./' + oldprofilePic )
            request.flash("success", "Changes saved successfully.")
            response.redirect("/private/profile")
        }
        catch (error)
        {
            request.flash("error", "error happened")
            response.status(500).send(error)
        }
    }
)

module.exports = router