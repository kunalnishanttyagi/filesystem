const { isUtf8 } = require('buffer');
const express=require('express')
const app=express();
const fs=require('fs');
const path=require('path')
app.get("/",(req,res)=>{
    res.send("server is working");
})
const date="12-12-11"
    const data="m nyi file m dl gya hu ek baar fir"
app.get("/create",(req,res)=>{
    // fs.readdir(`./files`,(err,data)=>{
    //     if(err)
    //         console.log(err)
    //     else
    //         console.log(data)
    // })
    
    fs.writeFile(`./files/${date}.txt`,data,(err)=>{
        if(err) console.log("err aa gya");
        else console.log("kaam ho gya");
    })


    res.send("creating new file")
})
app.get("/readdata",(req,res)=>{
    fs.readFile(`./files/${date}.txt`,'Utf8',(err,files)=>
    {
        if(err)
             console.log(err);
        else
            console.log(files);
            
        
    })
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, `../public`, `index.html`));
    //   });
    res.send("yha pr data dikhega")
})

app.get("/deletedata",(req,res)=>{
    fs.unlink(`./files/${date}.txt`,(err)=>
    {
        if(err)
             console.log(err);
        else
            console.log("delete ho gya");
            
        
    })
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, `../public`, `index.html`));
    //   });
    res.send("yha pr data delete hoga")
})

app.get("/show",(req,res)=>{
    fs.readdir(`./files`,(err,files)=>
    {
        if(err)
             console.log(err);
        else
            console.log(files);
            for(let i=0;i<files.length;i++){
            
            }
        
    })
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, `../public`, `index.html`));
      });
    // res.send("yha pr sari files show hongi")
})

app.listen(3000)