import mongoose from "mongoose";

const connectionDB = async () => {
    
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[DATABASE]: connected to MONGO_DB".blue);
  } catch (error) {
    throw new Error(error);
  }
};

export default connectionDB;