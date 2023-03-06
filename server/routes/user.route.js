const express = require('express');
const { signup, login, getDonors, update, getDonorById } = require('../controllers/user.controller');

const router = express.Router();

router.get("/donors", getDonors)
router.get("/donor/:id", getDonorById)

router.post("/signup",signup)
router.post("/login",login)

router.patch("/update/:id",update)



exports.userRoutes = router