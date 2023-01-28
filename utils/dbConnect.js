require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");
const dbConnect = async () => {
  const uri =
    `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster0.iytrdbr.mongodb.net/?retryWrites=true&w=majority`;
    //`mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster0.aevyxel.mongodb.net/?retryWrites=true&w=majority`;
    // `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster0.aevyxel.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  await client.connect();
  const userCollection = client.db("attendance_db").collection("users");
  const attendanceCollection = client.db("attendance_db").collection("attendance");
  const CourseCollection = client.db("attendance_db").collection("course");
  return {
    userCollection: userCollection,
    attendanceCollection: attendanceCollection,
    CourseCollection: CourseCollection
  };
};
module.exports = dbConnect;
