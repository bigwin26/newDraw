import mongoose from "mongoose";

export default () => {
  const connect = () => {
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }
    mongoose.connect(
      "mongodb://localhost:27017",
      {
        dbName: "yourdraw",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      (error) => {
        if (error) {
          console.log("db error", error);
        } else {
          console.log("connected db");
        }
      },
    );
  };
  connect();
  mongoose.connection.on("error", (error) => {
    console.error("db error", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.error("disconnected db, Retry the connection. ");
    connect();
  });
  require("./shoes");
};
