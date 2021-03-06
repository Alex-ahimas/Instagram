const express = require("express");
const multer = require("multer");

const checkAuth = require("../middleware/check.auth");
const extractFile = require("../middleware/file");
const PostController = require("../controllers/posts");
const Post = require("../models/post");

const router = express.Router();

const upload = multer({ dest: 'backend/storage/assets/public' });

// añadir publicaciones
//  router.post("", extractFile, PostController.createPost);

router.post('/', checkAuth, upload.single('file'), (req, res, next) => {

    console.log("POST INFO:  ", req.body.postInfo);
    const postInfo = JSON.parse(req.body.postInfo);
    
    try {
        console.log("REQ USER DATA:  ", req.userData);
        
        post = new Post({
            contenido: postInfo.contenido,
            image: req.file.filename,
            fechaCreacion: Date.now(),
            creator: req.userData.userId
        });
        
        console.log(req.file);
        post.save().then(postCreated => {
            console.log("CREATED:  ", postCreated);
        });
  //    service.service.filePath = req.file.filename;
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error en la creación!"
        })
    }

    return res.json({ "Status": 200 });
  });


// publicaciones
router.get("/all", PostController.getPosts);

// publicaciones con usuario


module.exports = router;