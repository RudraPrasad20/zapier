const express = require('express')
const app = express()

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>18){
        next()
    }else{
        res.status(404).send("you cant pass this")
    }
}

app.use(isOldEnoughMiddleware)
app.get('/part1',(req,res)=>{
    res.json({
        msg:"you are in part1"
    })
})
app.get('/part2',isOldEnoughMiddleware,(req,res)=>{
    res.json({
        msg:"you are in part2"
    })
})

app.listen(3000)