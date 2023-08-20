let express = require('express');
let router = express.Router();

router.post('/api/dog', (req, res) => {
    // let dog = req.body;
    // postDog(dog, (err, result) => {
    //     if (!err) {
    //         res.json({ statusCode: 201, data: result, message: 'success' });
    //     }
    // });

    //tell the controller to do db logic
});

router.get('/api/dog', (req, res) => {
    // getAllDog((err, result) => {
    //     if (!err) {
    //         res.json({ statusCode: 200, data: result, message: 'get all dog successful' });
    //     }
    // });

    //tell the controller to do db logic
});

module.exports = router;