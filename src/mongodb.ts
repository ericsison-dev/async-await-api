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
  const UserSchema = new mongoose.Schema({ name: String, email: String });
  const User = mongoose.model("User", UserSchema);

  return { User };
};

export const schema = initializeDbSchema();
