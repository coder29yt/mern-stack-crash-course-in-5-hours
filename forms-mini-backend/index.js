const express = require("express");
const app = express()
const port = 5000;
const { connectDb } = require("./connection")
const UserModel = require("./models/UserModel")
const cors = require("cors")

connectDb()
app.use(express.json())
app.use(cors())

app.post("/api/postData", async (req, res) => {

    // NORMAL WAY TO GRAB THE DATA
    // const name = req.body.name;
    // const email = req.body.email;
    // const message = req.body.message;
    // const phone = req.body.phone

    // SMART WAY TO GRAB THE DATA
    const { name, email, phone, message } = req.body // destruct*uring 

    try {

        let user = await UserModel.create({ name, email, phone, message })
        await user.save()

        return res.status(201).json({ success: true, message: "User created sucessfully" })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }

})

app.get("/api/getData", async (req, res) => {

    try {

        let users = await UserModel.find({});
        if (!users) {
            return res.status(404).json({ success: false, message: "No users found!" })
        }

        res.status(200).json({ success: true, message: "Users fetched", users })


    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
})

app.delete("/api/deleteData/:id", async (req, res) => {

    const { id } = req.params

    try {

        let user = await UserModel.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        res.status(200).json({ success: true, message: "User deleted sucessfully" })

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }

})

app.listen(port, () => {
    console.log(`Server running at port : ${port}`)
})