const ToDo = require("../models/ToDo")


exports.updateTodo = async(req , res) =>{
        try{
             
            const {id} = req.params;
            const { title, description} = req.body;
        
            const todo = await ToDo.findByIdAndUpdate(

              {_id:id},
              {title, description, updatedAt : Date.now()}

            )

            res.status(200).json({
                success:true,
                data:todo,
                message:"update successfully"
            })


        }
        catch(err){
                
            console.error(err);
            console.log(err);
            res.status(500)
            .json({
                success:false,
                data:"internal server error",
                message:err.message,
            })


        }


}