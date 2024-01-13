// 1) Node.Js - Environment provide karta hai scalable server apps banane ke liye
// 2) Expres.Js - Server banane ke liye help karta hai
// 3) MongoDB - Database

// SERVER BANANE KE LIYE STEPS
// 1) Ingredients chahiye
// 2) Ingredients ko use karenge
// 3) Bake karenege/ fry karnege/ listen

// Ingredients - Express.Js

// LET'S MAKE OUR OWN SERVER GUYS
const express = require("express");
const app = express()
const port = 5000
const { connectDb } = require("./connection")
const UserModel = require("./UserModel");

connectDb()

// middlewares matlab khuch aise functions jo request ke beech me kaam karenge
app.use(express.json())


// app.use("/api/message", (req, res) => {
//     console.log(req)
//     res.json({ message: "Hello bhai thanks for the message", msgId: 30303 })
// })

// TYPES OF REQUEST
// 1) get - tab use karnege jab hame server se data get karna ho
// 2) post - tab use karenge jab hame backend me data send karna ho
// 3) put - tab use karenge jab hame bakend me data ko edit karna ho
// 4) delete - tab us karenge jab hame data delete karna ho

app.get("/api/getData", async (req, res) => {

    let users = await UserModel.find({});
    return res.status(200).json({ success: true, message: "Users fetched", users })

})

app.post("/api/postData", async (req, res) => {

    let user = await UserModel.create({
        name: req.body.name,
        age: req.body.age
    })

    await user.save()

    return res.status(201).json({
        success: true,
        message: "User created sucessfully"
    })

})

app.put("/api/updateData/:id", async (req, res) => {

    const id = req.params.id
    const age = req.body.age;

    let user = await UserModel.findByIdAndUpdate(id, {
        age: age
    });

    res.status(200).json({ success: true, message: "User updated sucessfully" })

})

app.delete("/api/deleteData/:id", async (req, res) => {

    const { id } = req.params // desctructure

    let user = await UserModel.findByIdAndDelete(id)

    res.status(200).json({ success: true, message: "User deleted successfully" })

})


app.listen(port, () => {
    console.log(`server running at port ${port}`)
})


// Modules - Reuseable piece of code
// const { addNum } = require("./hello")
// addNum(2,3)

// Nodejs ko mongodb se connect karne ke liye ek package hai jisko ham bolte hai mongoose
// Models are used to store data in strutured format
