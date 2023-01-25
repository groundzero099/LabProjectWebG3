const { ObjectId } = require("mongodb");
const dbConnect = require("../utils/dbConnect");
const Collection = dbConnect(); //calling database collection here.

const getUser = async (req, res) => {
  const query = {};
  const cursor = (await Collection).userCollection.find(query);
  const users = await cursor.toArray();
  res.send(users);
};

const saveUser = async (req, res) => {
  const newUser = req.body;
  const result = (await Collection).userCollection.insertOne(newUser);
  res.send("User added");
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

module.exports = { getUser, saveUser, updateUser, deleteUser };
