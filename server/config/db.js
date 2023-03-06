const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

const connectDb = async ()=>{
    try {

        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
     
        })
        console.log('MongoDB connected');

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


module.exports = connectDb;