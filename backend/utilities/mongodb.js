import { MongoClient, ServerApiVersion } from "mongodb";
const client = new MongoClient(process.env.MONGODB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
client.connect();

export default client;