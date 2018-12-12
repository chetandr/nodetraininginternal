const router = require("express").Router();
const userController = require('./controller');


router.get('/',(req,res) => {
    userController.getUserData.then(data => res.send(data), error => res.send(error));
});

router.post('/',(req,res) => res.send("<h1>Create Users</h1>"));
router.put('/',(req,res) => res.send("<h1>Update Users</h1>"));
router.delete('/',(req,res) => res.send("<h1>Delete Users</h1>"));

module.exports = router;
