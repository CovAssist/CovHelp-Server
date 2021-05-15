import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    return console.log("Database connected");
  } catch (err) {
    console.log(err);
    return;
  }
};
export const disconnect = () => {
  return mongoose.disconnect();
};
