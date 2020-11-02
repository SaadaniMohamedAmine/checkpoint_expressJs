var express=require('express') ;
var router=express.Router() ;


router.use((req,res,next)=>{
    console.log(`Request from ${req.url} at ${new Date()}`)
     next()
})

router
  .route('/') 
  .get((req,res)=>{
      res.send('Hello from the homepage !!') ;
  })
  .post((req,res)=>{
      res.send('Hi i am a post request for the home page') ;
  });

  router
    .route('/service') 
    .get((req,res)=>{
      res.send('Hello from the service section') ;
    })
    .post((req,res)=>{
      res.send('This is a post request for the service page !') ;
    })

  router
    .route('/contact')
    .get((req,res)=>{
        res.send('Hello from contact page !') ;
    })
    .post((req,res)=>{
        res.send('I am a get request for the contact page') ;
    })
   

   module.exports=router ;