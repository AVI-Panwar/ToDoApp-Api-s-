const ToDo = require("../models/ToDo");



exports.deleteTodo = async(req , res) =>{
        try{
         
            const {id} = req.params;

            await ToDo.findByIdAndDelete(id);

            res.json({
                success:true,
                message:"ToDo Deleted"
            });


        }
        catch(err){

            
            console.log(err);
            res.status(500)
            .json({
                success:false,
                error:err.message,
                message:"Server Error"
            })   
           

        }


}