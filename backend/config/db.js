import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // ⬇️ CHANGE STARTS HERE ⬇️
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // You may also need to add useCreateIndex: true, and useFindAndModify: false 
      // depending on your Mongoose version, but the above two are critical for TLS errors.
    });
    // ⬆️ CHANGE ENDS HERE ⬆️
    
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ MongoDB Connection Failed:", error.message);
    // Optionally exit the process if the database connection is essential
    // process.exit(1); 
  }
};

export default connectDB;