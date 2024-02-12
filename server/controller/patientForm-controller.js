const Patient=require("../model/patientModel");

const patientForm=async(req,res)=>{
    try {
        const response=req.body;
        await Patient.create(response);
        return res.status(200).json({message:"message sent successfully"});
    } catch (error) {
        return res.status(500).json({message:"message not delivered"});
    }
};

const patientData=async(req,res)=>{
    try {
        const response=await Patient.find();
        if(!response){
            res.status(404).json({msg:"No patients found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        return res.json({message:"patientData error"});
    }
}


module.exports={patientForm,patientData};