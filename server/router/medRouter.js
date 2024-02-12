const express=require("express");
const router=express.Router();
const meds=require("../controller/medController");

router.route("/meds").get(meds);

module.exports=router;

