const Doctor=require("../model/doctorModel");

const doctors=async (req,res) =>{
    try {
        const response=await Doctor.find().exec();
        if(!response){
            res.status(404).json({msg:"No doctor found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`doctors:${error}`);
    }
}

module.exports=doctors;