//middleware to check if user has logged in
var ensureAuth = function ensureAuthenticated(request, response, next)
{
    if (request.isAuthenticated()) next()
    else 
    {
        request.flash("info", "Please login to view this page")
        response.redirect("/login")
    }
}

module.exports = { ensureAuthenticated: ensureAuth }