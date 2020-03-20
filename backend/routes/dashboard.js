const router = require('express').Router();
const multer = require('multer');

const dashPost = require('../models/dashPost');

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, 'backend/images');
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
});

router.post("/add", multer({ storage: storage }).array('image', 6),
    (req, res, next) => {
        
        const url = req.protocol + "://" + req.get('host');

        if (!req.files) {
            return res.status(400).send('images required !');
         }
        const post = new dashPost({
            imagePath: [
                url + "/images/" + req.files[0].filename,
                url + "/images/" + req.files[1].filename,
                url + "/images/" + req.files[2].filename,
                url + "/images/" + req.files[3].filename,
                url + "/images/" + req.files[4].filename,
                url + "/images/" + req.files[5].filename,
            ],
            title: req.body.title,
            description: req.body.description,
            rate: req.body.rate,
            price: req.body.price,
            quantity: req.body.quantity,
            color: req.body.color,
            size: req.body.size,
            category: req.body.category
        });
        post.save().then(createdPost => {
            res.status(201).json({
                message: "Post added successfully!",
                post: {
                    // id: createdPost._id,
                    image: createdPost.image,
                    title: createdPost.title,
                    description: createdPost.description,
                    rate: createdPost.rate,
                    price: createdPost.price,
                    quantity: createdPost.quantity,
                    color: createdPost.color,
                    size: createdPost.size,
                    category: createdPost.category
                }
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Creating a post faield!"
            })
        });
});

router.get("/getPosts", (req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const postQuery = dashPost.find();
    let feachedPosts;
    if (pageSize && currentPage) {
        postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    postQuery
        .then(documents => {
            feachedPosts = documents;
            return dashPost.count();
        })
        .then(count => {
            res.status(200).json({
                message: "Posts featched successfully!",
                posts: feachedPosts,
                maxPosts: count
            })
        })
        .catch(error => {
            res.status(500).json({
                message: "Feaching posts failed!"
            });
        });
});

router.get("/:id", (req, res, next) => {
    dashPost.findById(req.params.id)
        .then(post => {
            if (post) {
                res.status(200).json({post});
            } else {
                res.status(404).json({ message: "Post not found!" });
            }
        })
        .catch(error => {
            res.status(500).json({message: "Feaching post failed!"})
        });
});

router.put("/update/:id", multer({ storage: storage }).array('image'),
    (req, res, next) => {
        let image = req.body.imagePath;
        
        // if (req.files) {
        //     const url = req.protocol + "://" + req.get("host");
        //     image = url + "/images/" + req.files[0].filename;
        // }
        const url = req.protocol + "://" + req.get("host");
        const post = new dashPost({
            imagePath: [
                url + "/images/" + req.files[0].filename,
                url + "/images/" + req.files[1].filename,
                url + "/images/" + req.files[2].filename,
                url + "/images/" + req.files[3].filename,
                url + "/images/" + req.files[4].filename,
                url + "/images/" + req.files[5].filename,
            ],
            // _id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            rate: req.body.rate,
            price: req.body.price,
            quantity: req.body.quantity,
            color: req.body.color,
            size: req.body.size
        });
        dashPost.updateOne({ _id: req.params._id }, post)
            .then(result => {
                res.status(200).json({ message: "Update successfull!" });
                console.log(result)
                console.log(post)
            })
            .catch(error => {
                res.status(500).json({ message: "Couldn't updated post!" });
                console.log(post)
            });
});

module.exports = router;