const express = require('express');
const { getUsers } = require('./helper');
const router = express.Router();

router.get("/", (req, res) => {
    getUsers.then(data => res.send(data));
});

router.post("/", (req, res) => res.send("Write User Data"));
router.put("/", (req, res) => res.send("Update User Data"));
router.delete("/", (req, res) => res.send("Delete User Data"));

module.exports = router;
