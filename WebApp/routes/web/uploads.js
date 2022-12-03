var express     = require("express")
var fs          = require("fs")
var http        = require("http")


//For debugging, log out all contents of persistent storage
const Init_PersistentStorage = () =>
{
    var files = fs.readdirSync('/');
    console.log(files)
    files = fs.readdirSync('./');
    console.log(files)

    //Overwrite local contents
    if(fs.existsSync('/usr/src/app/uploads')){
        files = fs.readdirSync('/usr/src/app/uploads');
        console.log(files)

        CreateUploadSubFolders('/usr/src/app/uploads');
    }else{
        console.log("Persistent Storage not found")
    }
}

function CreateUploadSubFolders(dir)
{
    if(!fs.existsSync(dir + "/images/"))
        fs.mkdirSync(dir + "/images/");
    if(!fs.existsSync(dir + "/audios/"))
        fs.mkdirSync(dir + "/audios/");
    if(!fs.existsSync(dir + "/videos/"))
        fs.mkdirSync(dir + "/videos/");
    if(!fs.existsSync(dir + "/documents/"))
        fs.mkdirSync(dir + "/documents/");
    if(!fs.existsSync(dir + "/webpages/"))
        fs.mkdirSync(dir + "/webpages/");
}


var router = express.Router()

///uploads/download/testing
router.get
(
    "/download/testing",
    function(req, res)
    {
        console.log("testing")

        var filePath = '/usr/src/app/uploads/images';
        var files = fs.readdirSync('/usr/src/app/uploads/images');
        var fileName = files[0]; 
    
        res.download(filePath + "/" + fileName, fileName, function(error){
            console.log(error)
        }); 
    }
)

module.exports.Init_PersistentStorage = Init_PersistentStorage
module.exports.router = router