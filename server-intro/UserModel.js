const mongoose = require("mongoose");
// Schema matlab structure || structure hamesha key value pairs me banaya jata hai

const userSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     default: "Ramu", // agar koi name ki value nahi mili to ye by default, default me jo likha hai use enter kar dega
    //     required: true
    // }

    name: String,
    age: Number
}, { timestamps: true })

const UserModel = mongoose.model("user", userSchema)
module.exports = UserModel

