const express = require('express');
const { signup, login, getDonors, update } = require('../controllers/user.controller');

const router = express.Router();

router.get("/donors", getDonors)
router.post("/signup",signup)
router.post("/login",login)
router.patch("/update/:id",update)


exports.userRoutes = router