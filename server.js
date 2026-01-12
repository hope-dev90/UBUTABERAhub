var http = require('http');
var server = http.createServer(function(req,res){
 if(req.url=="/"){
    res.end("welcome to our page");
 }
 else if(req.url=="/students"){
    let students= [
        
           { id:1,names:"Aline"},
            {id:1,names:"hope"}
        
    ];
    res.end(JSON.stringify(students))
}
else {
    res.end("Api not found");
}
});
server.listen(4500);
console.log("APPLICATION");