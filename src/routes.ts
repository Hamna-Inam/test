import {Express, Request, Response, NextFunction } from "express";

function routes(app: Express){

    app.get('/api/courses',(req:Request, res:Response)=>{
        return res.send('Hello World2');
    });


    function routes(app:Express) {
    app.get ("/h",GetBookHandler);
    }
app.all('/api/all',(req:Request, res:Response)=>{
    return res.sendStatus(200); 
 });
 
 app.post("/api/data",(req:Request, res:Response)=>{
     console.log(req.body);
 
     return res.sendStatus(200);
 });
 
 //chain requests
 
 app.route("/")
 .get((req:Request, res:Response)=>{
     return res.send("You sent a get request")
 })
 .post((req:Request, res:Response)=>{
     return res.send("You sent a post request")
 })
 .put((req:Request, res:Response)=>{
     return res.send("You sent a put request")
 })
 .all((req:Request, res:Response)=>{
     return res.send("You sent an X request")
 })

 
app.get("/ab*cd",(req:Request, res:Response)=> res.send("/ab*cd"));
app.get("/abc",(req,res)=> res.send("abcc"));
  
     app.get ("/redirect",(req:Request, res:Response ) => {
         return res.redirect("http://example.com");
      });
     
      app.get("/api/books/:bookID/:authorID",(req:Request, res:Response)=>{
         console.log(req.params);
     
         return res.send(req.params.authorID + "\n" + req.params.bookID);
      })
     
     app.get("/health",(req,res)=>
        res.sendStatus(200));
     
     function handleGetBookOne(req:Request, res:Response,next: NextFunction){
         console.log("First Handler");
     
         next(); 
     }
     
     
     function handleGetBookTwo (req:Request, res:Response, next:NextFunction) {
         console.log ("Second handler");
     
         return res.send(req.params);
     
     }
     
     
     //app.get("/api/bookName/:bookName/:authorName",[handleGetBookOne,handleGetBookTwo]);
     
     app.get("/api/bookProperties/:bookName/:authorName", //route path
     
         function(req:Request, res:Response, next:NextFunction) { //handler
         console.log("First Function");
         next();
     
     }, function(req:Request, res:Response, next:NextFunction) {
         return res.send(req.params);
     
     });
     
     
     
     
}
export default routes; 