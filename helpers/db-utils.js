import { MongoClient } from "mongodb";

export const connectDatabase = async () => {
  // In connectionURL newslettern is the database name. we can use any name here.
  const connectionURL =
    "mongodb+srv://nextjsUser:nextjsPassword@nextjs-events-api.6nvod.mongodb.net/newsletter?retryWrites=true&w=majority";

  const client = await MongoClient.connect(connectionURL, {
    useUnifiedTopology: true,
  });

  return client;
};

export const insertDocument = async (client, collection, document) => {
  // const db =client.db('newsletter') // no need of this, as we have already mentioned db name in url

  // Accessing to the database
  const db = client.db();

  // here newletter is collection name
  const result = await db.collection(collection).insertOne(document);

  return result;
};

export const getAllDocuments = async (client, collection, sort) => {
  const db = client.db();

  // _id = -1 means sorting in decending order
  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
};
