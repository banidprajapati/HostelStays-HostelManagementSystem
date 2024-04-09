// Import the MongoDB driver
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://admin:password123@localhost:27017/HostelStays";

// Database Name
const dbName = "HostelStays";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Use the specified database
    const db = client.db(dbName);

    // Get the admin_details collection
    const collection = db.collection("admin_details");

    // Define the document to be inserted
    const adminDocument = {
      admin_id: "admin123",
      admin_password: "admin_password123",
      admin_contactN: "1234567890",
    };

    // Insert the document into the collection
    const result = await collection.insertOne(adminDocument);
    console.log(`Document inserted with ID: ${result.insertedId}`);
  } finally {
    // Close the client connection
    await client.close();
  }
}

// Call the run function
run().catch(console.error);
