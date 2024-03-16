import express from "express";

const app = express();

app.get ("/",(req, res) => {
    return res.send('Hello World');
});

app.get('/api/courses',(req,res)=>{
    return res.send('Hello World2');
});

app.post('api/data',(req,res)=>{
    console.log(req.body);

    return res.sendStatus(200);
});

