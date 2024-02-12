const express=require("express");
const router=express.Router();
const doctors=require("../controller/doctorController");

router.route("/doctors").get(doctors);

module.exports=router;

