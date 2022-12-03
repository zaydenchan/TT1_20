var fs                  = require("fs")
var path                = require("path")
var express             = require("express")
var passport            = require("passport")
var User                = require("../../models/user")
var ensureAuthenticated = require("../../authentication/authentication").ensureAuthenticated
var ObjectId            = require("mongodb").ObjectId

var router = express.Router()

//This page contains endpoint for front end navigation

router.get
(
    "/", 
    function(request, response)
    {
        response.render("home/index")
    }
)

router.get
(
    "/home",
    function(request, response)
    {
        response.render("home/home")
    }
)

router.get
(
    "/allProducts",
    async function(request, response)
    {
        var data = await Product.find({}).exec();
        if(data){
            response.render("public/products", {data})
        }
    }
)

router.get
(
    "/private/admin/:userId",
    ensureAuthenticated,
    function(request, response)
    {
        //two step authentication to check for admin rights
        //first check by email address
        //second check by user object id
        var userEmail = request.body.email
        User.findOne
        (
            {
                email: userEmail
            },
            function(error)
            {
                if (error) 
                {
                    request.flash("error", "You have no admin rights to access this page")
                    return response.redirect("/home")
                }
            }
        )

        User.findById(request.params.userId).exec
        (
            async(error, user) =>
            {
                if (error) 
                {
                    request.flash("error", "You have no admin rights to access this page")
                    return response.redirect("/home")
                }
                if (user)
                {
                    // const data = {
                    //     accessCodeList : [],
                    //     userList : []
                    // }

                    // data.accessCodeList = await Access.find()
                    // data.userList = await User.find()
                    // response.render("home/admin", {data})
                }
            }
        )
    }
)

router.get
(
    "/about",
    function(request, response)
    {
        response.render("home/about")
    }
)

router.get
(
    "/private/logout",
    ensureAuthenticated,
    function(request, response)
    {
        request.logout(function(done){})
        response.redirect("/home")
    }
)

router.get
(
    "/login",
    function(request, response)
    {
        response.render("home/login")
    }
)

router.post
(
    "/login",
    passport.authenticate
    (
        "login",
        {
            successRedirect : "/private/dashboard",
            failureRedirect : "/login",
            failureFlash    : true
        }
    )
)

router.get
(
    "/private/profile",
    ensureAuthenticated,
    function(request, response)
    {
        response.render("home/profile")
    }
)

router.get
(
    "/register",
    function(request, response)
    {
        response.render("home/register")
    }
)

router.post
(
    "/register",
    async function(request, response, next)
    {
        let errorMsg                    =   ""
        let passedAllMandatoryChecks    =   true

        //Mandatory field / checks
        if (passedAllMandatoryChecks)
        {
            console.log(request.body)
            passedAllMandatoryChecks    =   (request.body.email          && 
                                            request.body.firstname      &&
                                            request.body.lastname       &&
                                            request.body.address        &&
                                            request.body.username       &&
                                            request.body.password);

            errorMsg                    =   passedAllMandatoryChecks    ? 
                                            errorMsg                    : 
                                            "Please fill up all the mandatory fields"
        }
        
        //Check for password matching
        if (passedAllMandatoryChecks)
        {
            passedAllMandatoryChecks    =   request.body.password == request.body.repassword
            errorMsg                    =   passedAllMandatoryChecks    ? 
                                            errorMsg                    : 
                                            "Retype password does not match password!"
        }

        //Check if email is already registered
        if (passedAllMandatoryChecks)
        {
            const user = await User.findOne({
                    email: request.body.email
                },
            )
            passedAllMandatoryChecks    =   user ? false : true 
            errorMsg                    =   passedAllMandatoryChecks    ? 
                                            errorMsg                    : 
                                            "There's already an existing account with this email!"
        }

        //Check for referal code
        if (passedAllMandatoryChecks && request.body.referalCode !== "")
        {
            const user = await User.findOne({
                    myReferalCode : request.body.referalCode // check input referal code against all registered member referal codey
                }
            )
            passedAllMandatoryChecks    =   user ? true : false 
            errorMsg                    =   passedAllMandatoryChecks    ? 
                                            errorMsg                    : 
                                            "Invalid referal code!"
        }

        if (!passedAllMandatoryChecks)
        {
            request.flash("error", errorMsg)
            return response.redirect("/register")
        }
        console.log("passed mandatory field checks")

        //All mandatory checks cleared, proceed with account registeration
        var userID              = new ObjectId()
        var email               = request.body.email
        var firstName           = request.body.firstname
        var lastName            = request.body.lastname
        var address             = request.body.address
        var username            = request.body.username
        var password            = request.body.password
        var referalBy           = request.body.referalCode
        var optInPhyStatements  = request.body.optInPhyStatements
        var myReferalCode       = "000000"

        var newUser = new User
        (
            {
                userID          : userID,
                username        : username,
                password        : password,
                firstname       : firstName,
                lastname        : lastName,
                email           : email,
                address         : address,
                referalBy       : referalBy,
                myReferalCode   : myReferalCode,
                optIntoPhyStatements : optInPhyStatements
            }
        )
        newUser.save(next)
    },
    passport.authenticate
    (
        "login",
        {
            successRedirect : "/private/dashboard",
            failureRedirect : "/register",
            failureFlash    : true
        }
    )
)

module.exports = router