const express = require("express");
const router = require('express').Router();



const {selectAll,selectOne,addOne,deleteOne,UpdateOne}=require('../controllers/products.controllers')




router.get("/",selectAll);
router.get("/:id",selectOne);
router.post("/",addOne);
router.delete("/:id",deleteOne);
router.put("/:id",UpdateOne);


module.exports = router;
