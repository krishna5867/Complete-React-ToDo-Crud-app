const mongoose = require("mongoose");

const connectToDataBase = () =>
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`connected to DB: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
      console.log(err.message);
      process.exit(1);
    });
module.exports = connectToDataBase;
