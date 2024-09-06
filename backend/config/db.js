import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();
const mongo_uri = process.env.MONGO_URI;

const connectToMongoDB = async () => {
    try {
        console.log(mongo_uri)
        await mongoose.connect(mongo_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Mongo Database Connection Successful 🎉`);
    } catch (error) {
        console.log(mongo_uri);
        console.log(`Database connection error : ${error}`)
        process.exit(0);
    }
}

export { connectToMongoDB }

