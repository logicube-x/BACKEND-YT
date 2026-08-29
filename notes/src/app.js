const express=require("express");

const app=express();

app.use(express.json())

let notes=[];

app.post('/notes',(req,res)=>{
    notes.push(req.body);

    res.status(201).json({
        message:'notes received successfully'
    })
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        notes:notes,
        message:'notes fetched successfully'
    })
})

app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index;

    delete notes[index]

    res.status(200).json({
        message:'note deleted successfully'
    })
})

app.get('/home',(req,res)=>{
    res.send('Hello i am the home')
})

module.exports=app;