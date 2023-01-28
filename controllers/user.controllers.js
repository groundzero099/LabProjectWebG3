const { ObjectId } = require("mongodb");
const dbConnect = require("../utils/dbConnect");
const Collection = dbConnect(); //calling database collection here.
const jwt = require('jsonwebtoken'); 

const jwt_secret = "validusercheck"; 

const getUser = async (req, res) => {
  const query = {};
  const cursor = (await Collection).userCollection.find(query);
  const users = await cursor.toArray();
  console.log(users); 
  res.send(users);
};
const saveUser = async (req, res) => {
  const newUser = req.body;
  try{
    const check = await ( await Collection).userCollection.findOne({email:newUser.email}); 
    if(check){
      res.json("exist"); 
    }
    else {
      const result = await ( await Collection).userCollection.insertOne(newUser); 
      res.json("notexist"); 
    }
  }
  catch(e){
    res.json("Server Error");  
  }
};
const findUser = async(req, res)=>{
  const{email, password} = req.body; 
  try{
    let check = await ( await Collection).userCollection.findOne({email:email});   
    if(check && password==check.password){
        console.log(check); 
        const token = await jwt.sign({email: email}, jwt_secret,{
          expiresIn: 10,
        });
        res.json({status: "ok", data: token, user: check});  
    }
    else if(check){
      res.json({status: "error", error: "Invalid Password" });
    }
    else{
      res.json({status: "error2", error: "User Not found" });
    }
  }
  catch(e){
    res.json("Invalid User");  
  }
};


// Course
const getCourse = async (req, res) => {
  const query = {};
  const cursor = (await Collection).CourseCollection.find(query);
  const course = await cursor.toArray();
  res.send(course);
};

const saveCourse = async (req, res) => {
  const newCourse = req.body;
  try{
    const check = await ( await Collection).CourseCollection.findOne({courseCode:newCourse.courseCode});
    if(check){
      res.json({status: "error"});
    }
    else {
      const result = await ( await Collection).CourseCollection.insertOne(newCourse);
      res.json({status: "ok"});  
    }
  }
  catch(e){
    res.json("Server Error");  
  }
};

const findCourse = async(req, res)=>{
  const { id } = req.params;
  console.log(id); 
  const query = { _id: ObjectId(id) };
  // try{
  //   let check = await ( await Collection).userCollection.findOne({email:email});   
  //   if(check && password==check.password){
  //       console.log(check); 
  //       const token = await jwt.sign({email: email}, jwt_secret,{
  //         expiresIn: 10,
  //       });
  //       res.json({status: "ok", data: token, user: check});  
  //   }
  //   else if(check){
  //     res.json({status: "error", error: "Invalid Password" });
  //   }
  //   else{
  //     res.json({status: "error2", error: "User Not found" });
  //   }
  // }
  // catch(e){
  //   res.json("Invalid User");  
  // }
};


const updateUser = async (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  const query = { _id: ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      Name: updatedUser.Name,
    },
  };
  const result = (await Collection).userCollection.updateOne(
    query,
    updatedDoc,
    options
  );
  res.send("User updated");
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = (await Collection).userCollection.deleteOne(query);
    res.status(200).json({
      status: "Success",
      message: "Successfully deleted the user",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Cannot delete the user",
      err: error.message,
    });
  }
};

module.exports = { getUser, saveUser, updateUser, deleteUser, findUser, saveCourse,getCourse };
