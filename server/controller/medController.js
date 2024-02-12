const Med=require("../model/medModel");

const meds=async (req,res) =>{
    try {
        const response=await Med.find().exec();
        if(!response){
            res.status(404).json({msg:"No doctor found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`meds:${error}`);
    }
}

module.exports=meds;