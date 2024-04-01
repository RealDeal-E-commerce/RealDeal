// const express = require("express");
const router = require('express').Router();



const {getAll,addPost,deleteOne}=require('../controllers/post')




router.get("/",getAll);

router.post("/",addPost);
router.delete("/:id",deleteOne);



module.exports = router;
