const express=require("express");
const router=express.Router();
const healthAI=require("../controller/healthAI-controller");

router.route("/healthai").get(healthAI);

module.exports=router;