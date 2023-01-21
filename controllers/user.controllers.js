const { ObjectId } = require("mongodb");
const dbConnect = require("../utilis/dbConnect");
const collection = dbConnect(); //calling database collection here.


const getUser = async (req, res) => {
  const query = {};
  const cursor = (await collection).find(query);
  const users = await cursor.toArray();
  res.send(users);
};

const saveUser = async (req, res) => {
  const newUser = req.body;
  const result = (await collection).insertOne(newUser);
  res.send("User added");
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  const query = { _id: ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      name: updatedUser.name,
      age: updatedUser.age,
    },
  };
  const result = (await collection).updateOne(query, updatedDoc, options);
  res.send("User updated");
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = (await collection).deleteOne(query);
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

module.exports = { getUser, saveUser, updateUser, deleteUser };
