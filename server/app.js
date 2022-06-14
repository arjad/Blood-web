const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
// const ObjectId = require('mongodb').ObjectId; 

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
const jwt = require("jsonwebtoken");


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
    console.log(e, " error in mongo connection ");
})

const static_path_of_index = path.join(__dirname, "../public");
app.use(express.json());//to handle json data
app.use(express.urlencoded({extended:false}));
app.use( express.static(static_path_of_index));

// // Set EJS as templating engine 
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.set("view engine", "ejs");

//home
app.get("/",(req,res)=>{
    res.send("backend home ")
})


////////
// read all users (search blood)
app.get("/users/donors",async (req,res)=>{
    const u = await UserModal.find();
    res.send(u);
    console.log("== All Users are Shown ");
})


////////
// read one (profile)
app.get("/users/read",async (req,res)=>{
    // const u = await UserModal.find();
    // res.send(u);

    const token = req.headers['x-access-token']
    // console.log("token is ");
    // console.log(token);

	try {
		const decoded = jwt.verify(token, 'secret123')
		// console.log("decodec = ");
		// console.log(decoded);
		
		const email = decoded.email
		const user = await UserModal.findOne({ email: email })

        // console.log("matcher user");
        // console.log(user);

		return res.json({ status: 'ok', matcheduser: user })
	}
    catch (error) 
    {
		// console.log("catch error ====== " + error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

// ////////
// // read single user
// app.get("/users/read/:uid",async (req,res)=>{

//     var id = req.params.id;       
//     var good_id = new ObjectId("622f35670be6aaf768594481");

//     //you can now query
//     const a = await UserModal.find({_id: ObjectId('622f35670be6aaf768594481')})
//     .then((userfound)=>{
//         if(userfound)
//         {
//             console.log("=== Single User === " + userfound);
//             return res.status(200).json(userfound);
//             // res.status(201).json({message:userfound})

//         }
//         else if(userfound === NULL && !userfound)
//         {
//             console.log("user not found");
//             return res.sendStatus(404).end();       
//         }
//     })
//     .catch((e)=>{
//         next(e);
//         console.log("error = " + e)
//     });
//     console.log("a =" + a );
// })


////////
//  sign up  single user (init info)
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


//////
// login single user
app.post("/users/logininsert",async (req,res)=>{
    // console.log(" login data from front end = ", req.body);

    const {login_email, login_pass} = req.body;
    if(!login_email || !login_pass)
    {
        return res.status(400).json({error:"plz fill all fields"})
    }

    const userlogin = await UserModal.findOne({email:login_email})
    if(userlogin)
    {
        // console.log("user login = "+userlogin);
        if(login_pass !== userlogin.pass)
        {
            console.log("Invalid login Credientials");
            res.status(400).json({message:"Invalid Credientials"})
        }
        else{
            const token = jwt.sign({
                email:login_email
            },
            "secret123"
            );
            
            // console.log("token genterated successfully");
            // console.log(token);

            res.json({message:"sign in successfully done", mytoken:token})
            console.log("login success");
            //send all db data to front end

        } 
    }
    else{
        console.log("Invalid login Credientials");
        res.status(400).json({message:"Invalid Credientials"})
    }
})


/////////
// read all posts
app.get("/posts/read",async (req,res)=>{

    const r = await PostModal.find();
    res.send(r);
    console.log("== Post  DATA is Shown");
})



//////////
//  insert post
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
// update single user profile
app.put("/user/profileupdate", async (req,res)=>{
    console.log("updating user profile");

    let id = req.body._id;
    let u_fname = req.body.fname;
    let u_lname = req.body.lname;
    let u_phoneno = req.body.phoneno;
    let u_email = req.body.email;
    let u_pass = req.body.pass;
    let u_last_donated = req.body.last_donated;
    let u_area= req.body.area;
    let u_city = req.body.city;
    let u_country= req.body.country;
    let u_pucit = req.body.pucit;

    try{
        await UserModal.findById(id, (err, updated)=>{
            if(u_fname != "")
            {
                updated.fname = u_fname;
            }
            if(u_lname != "")
            {
                updated.lname = u_lname;
            }
            if(u_phoneno != "")
            {
                updated.phoneno = u_phoneno;
            }
            if(u_email != "")
            {
                updated.email = u_email;
            }
            if(u_pass != "")
            {
                updated.pass = u_pass;
            }
            if(u_lastdonated != "")
            {
                updated.lastdonated = u_last_donated;
            }
            if(u_area != "")
            {
                updated.area  = u_area;
            }
            if(u_city != "")
            {
                updated.city  = u_city;
            }
            if(u_country != "")
            {
                updated.country  = u_country;
            }
            if(u_pucit != "")
            {
                updated.pucit  = u_pucit;
            }

            updated.save();
            res.send("updated");

            console.log("Updated User= ", updated);            
         })
    }
    catch(e)
    {
        console.log(" UPDATE Error !" , e);
    }
})


// app.delete('/posts/delete/:id',async  function(req, res) {

//     const id = req.params.id;
//     await post.findByIdAndRemove(id).exec();

//     res.send("Deleted");
//     console.log("Food DELETED ");
  
// });

//wrong url, errror on 5000 port browser
app.get("*",(req,res)=>{
    res.sendFile(__dirname + "/404.html");
})


app.listen(port ,()=>{
    console.log(`server is running at port at ${port}`)
})