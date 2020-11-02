var express=require('express') ;
var app=express() ;
const port=process.env.port || 4444 ;
var routes=require('./routes/routes') ;
app.use('/',routes) ;


app.listen(port,(err)=>{
    if(err) {
        console.log('Got an error',err)
    }
    console.log(`Listening on port ${port}`) ;
})