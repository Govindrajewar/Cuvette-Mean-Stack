const express = require("express");

const app = express();
const PORT = 3000;
const db = require("./config/db");
const Post = require("./models/Post");

app.use(express.json());

db()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

// check health of api
app.get("/api", (req, res) => {
  res.status(200).json({
    status: "SUCCESS",
    message: "API is working fine",
  });
});

// fetching all the posts
app.get("/api/posts/", (req, res) => {
  Post.find({})
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: "SUCCESS",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: "Failed",
        message: err.message,
      });
    });
});

// fetching a specific data:
app.get("/api/posts/:id", (req, res) => {
    let postId = req.params.id;

    Post.find({_id: postId})
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: "SUCCESS",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: "Failed",
        message: err.message,
      });
    });
})


// create a new post:
app.post("/api/posts", (req, res) => {

    let newPost = new Post({
        title: req.body.title,
        description: req.body.description
    })

    console.log(newPost);

    newPost.save()
        .then((data) =>{

            res.status(200).json({
                message: "Post Created successfully",
                data: data,
            })
        })
        .catch((err) => {

            res.status(500).json({
                message: err.message,
            })
        })
})


// Update a new post:
app.patch("/api/posts/:id", (req, res) => {

    let postId = req.params.id;
    let newInfo = {
        title: req.body.title,
        description: req.body.description
    }

    Post.findByIdAndUpdate(postId, newInfo)
    .then((data) => {
      res.status(200).json({
        status: "Data Updated successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Failed",
        message: err.message,
      });
    });
})


// Delete a new post:
app.delete("/api/posts/:id", (req, res) => {

    let postId = req.params.id;

    Post.findByIdAndDelete(postId)
    .then((data) => {
      res.status(200).json({
        status: "Data Deleted successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Failed",
        message: err.message,
      });
    });
})

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
