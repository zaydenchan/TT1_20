var passport        = require("passport")
var localStrategy   = require("passport-local").Strategy
var User            = require("./models/user")

module.exports = function()
{
    //turns a user object into an id
    passport.serializeUser
    (
        function(user, done)
        {
            //serializing the user
            done(null, user._id)
        }
    )
    //turns the id into a user object
    passport.deserializeUser
    (
        function(id, done)
        {
            User.findById
            (
                id, 
                function(error, user)
                {
                    done(error, user)
                }
            )
        }
    )

    passport.use
    (
        "login", 
        new localStrategy
        (
            {
                usernameField: "email",
                passwordField: "password"
            },
            function(email, password, done)
            {
                //DB query - find one document
                User.findOne
                (
                    {email: email},
                    function(error, user)
                    {
                        if (error) return done(error)
                        if (!user) return done(null, false, {message: "Email not found!"})
                        user.checkPassword
                        (
                            password,
                            //Check against DB
                            function(error, isMatch)
                            {
                                if (error)      {
                                    console.log("ERROR in passport")
                                    return done(error)
                                }
                                if (isMatch){
                                    console.log("match in passport")
                                    return done(null, user)
                                }
                                if(!isMatch)
                                    console.log("does not match in passport " + password)
                                return done(null, false, { message: "Wrong password!" })
                            }
                        )
                    }
                )
            }
        )
    )
}