const express = require("express");
const router = require('express').Router();



const {selectAll,selectOne,addOne,deleteOne,UpdateOne,add,verify}=require('../controllers/allnft.controllers')




router.get("/",selectAll);
router.get("/:id",selectOne);
router.post("/",addOne);
router.delete("/:id",deleteOne);
router.put("/:id",UpdateOne);
router.post("/pay/",add);
router.post("/:id",verify);


module.exports = router;
