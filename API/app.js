 const mysql=require('mysql');
const express=require('express');
const router=express.Router();
var app =express();
const bodyparser=require('body-parser');
const cors = require('cors')
app.use(cors())
 

// app.use(function(req,res,next){
//     res.header("Access-Control-Allow-origin","*");
//     res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
//     res.header("Access-Control-Allow-Methods","POST");
//     next();

    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'POST');
        next();
      });

// });
const port =3000;

var con=mysql.createConnection({
    host:"172.16.8.93",
    user:"root",
    password:"System@1234",
    database:"simpledb",
});

con.connect((err)=> {
    //if(err) throw err;
    console.log("DB connection succeded");

});
app.use(bodyparser.json());
app.listen(3000,()=>console.log("express server running at port no:3000"));


app.post("/register",(req,res)=>
{
    
    let EmpId=req.body.EmpId;
    let Name=req.body.Name;
    let EmpCode=req.body.EmpCode;
    let Salary=req.body.Salary;

    let sql="INSERT INTO employee VALUES (?,?,?,?)"
    con.query(sql,[EmpId,Name,EmpCode,Salary],function(err,result){
        //console.log(err);
        res.send("record inserted",+result);
    });
    
    // con.query("INSERT INTO employee (?,?,?,?) VALUES, (?,?,?,?)", function (err, result) {
    //     if (err) throw err;
    //     res.send("1 record inserted");
    //   });

});

app.get("/getUser",(req,res)=>
{
    let sql="SELECT * FROM employee";
    con.query(sql,function(err,result)
    {
        if(err) throw err;
        res.send(result);
    });

});

app.post("/deleteUser",(req,res)=>
{
    console.log(req);
    let users=req.body;
    users.forEach(element=>
        {
        console.log(element);
        });
let sql="DELETE FROM employee WHERE EmpId IN (?)";
console.log(sql);
con.query(sql,[users],function (err,result){
    if(err)throw err;
    res.send(result);
});
});

app.post("/updateUser",(req,res)=>{
console.log("updatecall");
 
let EmpId=req.body.EmpId1;
let Name=req.body.Name1;
let EmpCode=req.body.EmpCode1;
let Salary=req.body.Salary1;
console.log(EmpId);


let sql="UPDATE employee SET Name=?,EmpCode=?,Salary=? WHERE EmpId IN(?)";
con.query(sql,[Name,EmpCode,Salary,EmpId],function(err,result){
    if(err)throw err;
    res.send("record updated"+result);
});
});