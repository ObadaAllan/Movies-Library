'use strict';
const express=require('express');
const app=express();
const port=3000;
const data=require('./data.json');

app.get('/',datahandle)

function datahandle(req,res)
{
    let arrdata=[]
    let newdata=new Dataconst(data.title,data.poster_path,data.overview);
    arrdata.push(newdata);
    res.json(arrdata);
} 

app.listen(port,()=>{
    console.log(`app is listing in port ${port}`);
})

//constructor
function Dataconst(title,poster,overview)
{
    this.title=title;
    this.poster_path=poster;
    this.overview=overview;
}