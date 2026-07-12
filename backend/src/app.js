const express = require("express");
const app = express();
const multer = require("multer");
const uploadFile = require("./service/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
    const fileBuffer = req.file.buffer;
    const result = await uploadFile(fileBuffer);
    console.log("result", result);
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    });

    res.status(201).json({ message: "Post created successfully", post });

});


app.get("/posts", async (req, res) => {
    const posts = await postModel.find();
    res.status(200).json({ posts });
});
module.exports = app;
