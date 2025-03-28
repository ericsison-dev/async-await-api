import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDb Connected!");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

const initializeDbSchema = () => {
  const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
  });

  const User = mongoose.model("User", UserSchema);

  return { User };
};

export const schema = initializeDbSchema();
