const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
const ObjectId = require('mongodb').ObjectId; 

//to host our website we keep port number in env filess
const port  = process.env.PORT || 5000;
const path = require("path");
const mongoose = require("mongoose");
const { emitWarning, nextTick } = require("process");

//model imort 
const PostModal = require("./models/postmodel");
const UserModal = require("./models/usermodel");
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");

//connection to mongo db
const DB = "mongodb://arjad:123@cluster0-shard-00-00.cl5kh.mongodb.net:27017,cluster0-shard-00-01.cl5kh.mongodb.net:27017,cluster0-shard-00-02.cl5kh.mongodb.net:27017/fyp-db?ssl=true&replicaSet=atlas-peik6a-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || DB, {
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("connected with mongo db");
})
.catch((e)=>{
    console.log(e, " error in connection ");
})

const static_path_of_index = path.join(__dirname, "../public");
app.use(express.json());//to handle json data
app.use(express.urlencoded({extended:false}));
app.use( express.static(static_path_of_index));

// Set EJS as templating engine 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs");

//home
app.get("/",(req,res)=>{
    res.send("backend home ")
})


////////
// read all users
app.get("/users/read",async (req,res)=>{

    const u = await UserModal.find();
    res.send(u);
    console.log("=== All Users are Shown === ");
})

////////
// read single users
app.get("/users/read/:uid",async (req,res)=>{

    var id = req.params.id;       
    var good_id = new ObjectId("622f35670be6aaf768594481");

    //you can now query
    const a = await UserModal.find({_id: ObjectId('622f35670be6aaf768594481')})
    .then((userfound)=>{
        if(userfound)
        {
            console.log("=== Single User === " + userfound);
            return res.status(200).json(userfound);
            // res.status(201).json({message:userfound})

        }
        else if(userfound === NULL && !userfound)
        {
            console.log("user not found");
            return res.sendStatus(404).end();       
        }
    })
    .catch((e)=>{
        next(e);
        console.log("error = " + e)
    });
    console.log("a =" + a );
})

//sign up user (init info)
app.post("/users/insert",async (req,res)=>{
    console.log(" login body = ", req.body);

    const {fname,lname, blood, email, pass, phoneno} = req.body;

    try{
        const user = new UserModal({fname,lname, blood, email,pass, phoneno});
        
        const data_entered = user.save();
        if(data_entered)
        {
            res.status(201).json({message:"data entered"})
            console.log("data entered");
        }
        else{
            res.status(500).json({error:"error to enter data"})
            console.log("data error");            
        }
    }
    catch(e)
    {
        console.log("INSERT ERRROR ! " , e);
    }
})


//login data from front end  & post to db
app.post("/users/logininsert",async (req,res)=>{
    console.log(" login data from front end = ", req.body);

    const {login_email, login_pass} = req.body;
    if(!login_email || !login_pass)
    {
        return res.status(400).json({error:"plz fill all fields"})
    }

    const userlogin = await UserModal.findOne({email:login_email})
    if(userlogin)
    {
        console.log("user login = "+userlogin);
        if(login_pass !== userlogin.pass)
        {
            console.log("Invalid login Credientials");
            res.status(400).json({message:"Invalid Credientials"})
        }
        else{
            res.json({message:"sign in successfully done"})
            console.log("login success");
            //send all db data to front end
            console.log("user last donated = " + userlogin.lastdonated) 
        } 
    }
    else{
        console.log("Invalid login Credientials");
        res.status(400).json({message:"Invalid Credientials"})
    }
})


/////////
// read data from db       run at port 5000
app.get("/posts/read",async (req,res)=>{

    const r = await PostModal.find();
    res.send(r);
    console.log("================Post  DATA is Shown ========== ");
})



//////////
//get data from front end  & post to db
app.post("/posts/insert",async (req,res)=>{
    console.log("Post added, req= ", req.body)    

    const {patient_blood,patient_name,pucit_roll,mobile_no,email,patient_address,patient_city,hospital_name} = req.body;

    if(!patient_blood || !patient_name || !mobile_no || !email || !patient_address || !email || !patient_address) 
    {
        console.log("name and blood present Any Input value missing , so data cannot sent to DB");
        return res.status(200).json({error :" plz fill all field properly"});
    }
    if( !hospital_name )
    {
        console.log("other missing");
        return res.status(200).json({error :" plz fill all field properly"});
    
    }
    try{

        const post = new PostModal({patient_blood,patient_name,pucit_roll,mobile_no,email,patient_address,patient_city,hospital_name});
        
        const data_entered = post.save();
        if(data_entered)
        {
            res.status(201).json({message:"data entered"})
            console.log("data entered");
        }
        else{
            res.status(500).json({error:"error to enter data"})
            console.log("data error");            
        }
    }
    catch(e)
    {
        console.log("INSERT ERRROR ! " , e);
    }
})



/////////
// update
app.put("/posts/update", async (req,res)=>{

    const updated_name = req.body.updated_food_name;
    const updated_price = req.body.updated_food_price;
    const id = req.body.id;

    try{
        await post.findById(id, (err, updated)=>{
            updated.productname = updated_name;
            updated.productprice= updated_price;
            updated.save();
            res.send("updated");

            console.log(" Food Updated = ", updated);            
         })
    }
    catch(e)
    {
        console.log(" UPDATE Error !" , e);
    }
})


app.delete('/posts/delete/:id',async  function(req, res) {

    const id = req.params.id;
    await post.findByIdAndRemove(id).exec();

    res.send("Deleted");
    console.log("Food DELETED ");
  
});

//wrong url errror on 5000 port browser
app.get("*",(req,res)=>{
    res.sendFile(__dirname + "/404.html");
})



app.listen(port ,()=>{
    console.log(`server is running at port at ${port}`)
})