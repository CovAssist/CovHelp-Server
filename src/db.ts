import mongoose from "mongoose";

export const connect = async () => {
  try {
    return await mongoose.connect(
      `${process.env.DB_URL}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Database connected");
        }
      }
    );
  } catch (err) {
    console.log(err);
    return;
  }
};
export const disconnect = () => {
  return mongoose.disconnect();
};
