import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://${process.env.mongodb_login}:${process.env.mongodb_password}@main.wnelbcf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
client.connect();

export default client;