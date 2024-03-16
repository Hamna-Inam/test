import express, {NextFunction, Request,Response} from "express";
import { isGeneratorObject } from "util/types";
import routes from "./routes";
import helmet from 'helmet'

const app = express();

app.use(helmet());

app.use(express.json());

app.get('/',(req,res)=> res.sendStatus(200));

// doesn't work
app.get("/api/bookGenerics/:bookName/:authorName", //route path
 function(req:Request< {bookName:'string', authorName: 'string'},{ },{name:'string'},{} >, res:Response, next:NextFunction) {
   
   //@ts-ignore
    return res.send(req.name + " " + req.params.bookName + " " +  req.params.authorName + req.body.name ) ;


});

async function throwsError() {
    throw new Error ('Boom!');
}

//Error Handling
app.get('/error', async(req,res) => {
    try {
        await throwsError();
        res.sendStatus(200);
    } catch (e) {
        res.status(400).send("Error caught!")
    }

});


function middleware  (req:Request, res:Response, next:NextFunction) {
   
    //@ts-ignore
    req.name ='Hamna';

    next();

}

//global middleware

app.use(middleware); //for every verb

//middleware 
app.get("/api/bookMiddleware/:bookName/:authorName", //route path
 function(req:Request, res:Response, next:NextFunction) {
   
   //@ts-ignore
    return res.send(req.name);

});



routes(app);

app.listen(3001, () => {
    console.log("Application listening at http://localhost:3001");
});



