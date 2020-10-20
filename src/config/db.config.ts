// db.ts
import mongoose from 'mongoose';
import vars from './vars.config';

const connectDB = async () => {
  try {
    await mongoose.connect(vars.MongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log('MongoDB is Connected');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
