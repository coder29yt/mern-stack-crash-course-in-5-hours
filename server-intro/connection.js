const mongoose = require("mongoose");

const connectDb = async () => {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/users-db")
    if (connection) {
        console.log("Connected to DB")
    } else {
        console.log("Connection Failed to DB")
    }
}

module.exports = { connectDb }