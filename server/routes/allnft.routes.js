const express = require("express");
const router = require('express').Router();



const {selectAll,selectOne,addOne,deleteOne,UpdateOne}=require('../controllers/allnft.controllers')




router.get("/",selectAll);
router.get("/:UncommenRare",selectOne);
router.post("/add",addOne);
router.delete("/:id",deleteOne);
router.put("/:id",UpdateOne);


module.exports = router;
