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

const userData = async(req, res)=>{
  const {token} = req.body; 
  try{
    const user = jwt.verify(token, jwt_secret);
    const useremail = user.email;
    await ( await Collection).userCollection.findOne({email: useremail})
    .then((data)=>{
      res.send({status: "ok", data:data}); 
    })
    .catch((error)=>{
      res.send({status: "error", data: error}); 
    });
  }catch(error){

  }
}


const saveUser = async (req, res) => {
  const newUser = req.body;
  try{
    const check = await ( await Collection).userCollection.findOne({email:newUser.email});
    console.log(check); 
    if(check){
      res.json("exist"); 
    }
    else {
      const result = await ( await Collection).userCollection.insertOne(newUser);
      console.log(result); 
      res.json("notexist"); 
    }
  }
  catch(e){
    res.json("Server Error");  
  }
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

module.exports = { getUser, saveUser, updateUser, deleteUser, findUser,userData };
