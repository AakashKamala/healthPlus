const express=require("express");
const router=express.Router();
const {patientForm,patientData}=require("../controller/patientForm-controller");
// const validatePatient = require('../middleware/patientFormValidateMiddleware');
// const patientFormSchema=require("../validator/patientFormValidator")

router.route("/patientform").post(patientForm);


// router
//     .route("/patientform")
//     .post(validatePatient(patientFormSchema),patientForm);


router.route("/patientform").get(patientData);

module.exports=router;