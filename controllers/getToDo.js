const ToDo = require("../models/ToDo");

//define route handler
 
exports.getTodo = async(req, res) =>{
    try{
            //fetch all to dos from database
            const todos = await ToDo.find({});

            //response
            res.status(200)
            .json({
                success:true,
                data:todos,
                message:"Entire ToDo data is fetched",
            })
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

exports.getToDoById = async(req, res)=>{
    try{

           const id  = req.params.id;
           const todo = await ToDo.findById({_id:id});


           //data for given is not found
           if(!todo){
             return res.status(404).json({
                success:false,
                message: "No Data found with given id"
             })
           }

           res.status(200).json({
             success:true,
             data:todo,
             message:`Todo ${id} data successfully fetched`
           })



    }catch(err){

        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })

    }
}