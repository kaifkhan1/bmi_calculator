const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));


app.get('/',function(req,res){

    res.sendFile(__dirname+'/index.html');

});

app.post('/',function(req,res){

    var heig = parseFloat(req.body.height);
    var weig = parseFloat(req.body.weight);
    var result = weig/(heig*heig) ;

    res.send("The BMI is "+ result);

});

app.listen(3000,function(){
    console.log('Server Started');
});


