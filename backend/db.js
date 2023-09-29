const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://jaimin15:opentowork123@cluster1.osslgvx.mongodb.net/";

// main().catch(err => console.log(err));


mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

