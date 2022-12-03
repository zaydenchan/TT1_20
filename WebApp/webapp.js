//Project Dependencies
var http            = require('http')
var path            = require("path")
var express         = require("express")
var mongoose        = require("mongoose")
var passport        = require("passport")
var bodyParser      = require("body-parser")
var cookieParser    = require("cookie-parser")
var flash           = require("connect-flash")
var session         = require("express-session")
var setUpPassport   = require("./setuppassport")
var params          = require("./parameters/parameters")
var storage         = require('./routes/web/uploads')

storage.Init_PersistentStorage()

//Print out public IP
http.get
(
    {
        'host': 'api.ipify.org', 
        'port': 80, 
        'path': '/'
    }, 
    function(resp) 
    {
        resp.on
        (
            'data', 
            function(ip)
            {
                console.log("Public IP address is: " + ip);
            }
        )
    }
)

//Initialize express
var app = express()

//Establish Connection to Database
mongoose.connect(params.DATABASECONNECTION)

//define all passport user callbacks
setUpPassport()

//Set-up the settings for express
app.set("port"          , process.env.PORT || 80)
app.set("views"         , path.join(__dirname, "views"))
app.set("view engine"   , "ejs")

app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use
(
    session
    (
        {
            secret              : "dbs_hackathon_2022",
            resave              : false, 
            saveUninitialized   : false
        }
    )
)
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

//Direct
app.use("/"             , require("./routes/web"))
app.use("/api"          , require("./routes/api"))
app.use("/uploads"      , express.static(path.resolve(__dirname, "uploads"  )))
app.use("/assets"       , express.static(path.resolve(__dirname, "assets"  )))
app.use("/downloads"    , express.static(path.resolve(__dirname, "downloads")))
app.use("/bootstrap"    , express.static(path.resolve(__dirname, "node_modules/bootstrap/dist"          )))
app.use("/icons"        , express.static(path.resolve(__dirname, "node_modules/bootstrap-icons/icons"   )))
app.use("/fonts"        , express.static(path.resolve(__dirname, "node_modules/bootstrap-icons/font"   )))

//Listens
app.listen
(
    app.get("port"), 
    function()
    {
        console.log("Server started listening on port(s): " + app.get("port"))
    }
)
