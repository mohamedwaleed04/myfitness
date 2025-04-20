import mongoose from "mongoose";

const connection = async () => {
    return await mongoose.connect('mongodb://0.0.0.0:27017/demo')
    .then(() => console.log(`server started`));
};


export default connection;