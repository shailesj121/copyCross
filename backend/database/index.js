import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("Database connected");
        return
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDb;