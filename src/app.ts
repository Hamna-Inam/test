import express, {NextFunction, Request,Response} from "express";
import routes from "./routes";

const app = express();

app.use(express.json());



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

routes(app);

app.listen(3001, () => {
    console.log("Application listening at http://localhost:3001");
});




