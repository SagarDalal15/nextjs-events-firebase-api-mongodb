import { MongoClient } from "mongodb";

export const connectDatabase = async () => {
  const connectionURL =
    "mongodb+srv://nextjsUser:nextjsPassword@nextjs-events-api.6nvod.mongodb.net/newsletter?retryWrites=true&w=majority";

  const client = await MongoClient.connect(connectionURL, {
    useUnifiedTopology: true,
  });

  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
};

export const getAllDocuments = async (client, collection, sort) => {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
};
