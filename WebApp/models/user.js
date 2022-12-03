var bcrypt      = require("bcryptjs")
var mongoose    = require("mongoose")

const SALT_FACTOR = 10

//Store user credentials
var userSchema = mongoose.Schema
(
    {
        email           : {type: String , required  : true  , unique: true          },
        username        : {type: String , required  : true  , unique: true          },
        password        : {type: String , required  : true                          },
        firstName       : {type: String , required  : true                          },
        lastName        : {type: String , required  : true                          },
        gender          : {type: String , required  : true                          },
        myReferalCode   : {type: String , minlength : 6     , maxlength: 12, unique: true  },   // random auto generated
        referalBy       : {type: String , required  : false                         },          // optional
        profilePic      : {type: String , required  : false                         },
        postalCode      : {type: Number , required  : true                          },
        isAdmin         : {type: Boolean, default   : false                         },
        createdAt       : {type: Date   , default:Date.now                          }
    }
)

//pre is series of middleware functions, executed one after another
userSchema.pre
(
    //Save - Document middleware
    "save", 
    async function(done)
    {
        var user = this

        //Hash password
        if (!user.isModified("password")) return done()
        bcrypt.genSalt
        (
            SALT_FACTOR,
            function(error, salt)
            {
                if (error) return done(error)
                bcrypt.hash
                (
                    user.password, 
                    salt, 
                    function(error, hashedPassword)
                    {
                        if (error) return done(error)
                        user.password = hashedPassword
                    }
                )
            }
        )

        //Generate random string for newly created member referal code
        isGenerated = false;
        var myReferalCode = "";
        while(!isGenerated){
            const randomInteger = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min; // random 6 to 10 
              };
            myReferalCode = Math.random().toString(36).substring(2, 2 + randomInteger(6, 10));

            const user = await User.findOne(
                {myReferalCode: myReferalCode},
            )
            if(!user) isGenerated = true;
        }
        user.myReferalCode = myReferalCode;

        done()
    }
)

//checkPassword will run <done> callback informing whether password matches
userSchema.methods.checkPassword = function(password_input, done)
{
    if (this.password != null)
    {
        bcrypt.compare
        (
            password_input, 
            this.password, 
            function(error, isMatch)
            {
                done(error, isMatch)
            }
        )
    }
}

var User = mongoose.model("User", userSchema)

module.exports = User