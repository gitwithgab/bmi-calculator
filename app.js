const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.post("/",(req,res)=>{
   let w = parseFloat(req.body.weight);
   let h = parseFloat(req.body.height);

   let bmi = (w / h) * h;
    
    res.send(`Your BMI is equal to ${bmi}`);
})

const PORT=3001
app.listen(PORT, ()=>{
    console.log(`Web Server is up and running on port ${PORT}`);
})

