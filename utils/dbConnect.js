const { MongoClient, ServerApiVersion } = require("mongodb");
const dbConnect = async() => {
  const uri =
    "mongodb+srv://uttamsaha:komolsaha@cluster0.ejbisre.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
    await client.connect();
    const collection = client.db("attend").collection("users");
    return collection;
};
module.exports = dbConnect;
