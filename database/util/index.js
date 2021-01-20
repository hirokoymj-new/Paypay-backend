const mongoose = require("mongoose");

module.exports.connection = async () => {
  try {
    //mongoose.set("debug", true);
    // await mongoose.connect(process.env.MONGO_DB_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    await mongoose.connect(
      "mongodb+srv://root:root@cluster0.xcz6m.mongodb.net/paypaydb?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(process.env.MONGO_DB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
