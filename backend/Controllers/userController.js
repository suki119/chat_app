const User = require('../Models/userModel');



//adding User details
const addUserData = async (req,res) => {
    
    let newData = new User(req.body);

   

  
    const data = req.body

    try{

        newData.save((err)=>{
            if(err){
                return res.status(400).json({
                    message:err
                });
            }
            return res.status(200).json({
                status:'2100',
                message:"data added succsesfull",
               
            });
        });

    }catch(err){

        return res.status(400).json({
            messages:err
        });

    }
}


//get all acount details
const getAllUserData =  async (req,res) => {
    try{
        const AccountData = await User.find().sort({"createdAt":-1});
        return res.status(200).send({
            data:AccountData,
            status:2100
        });

    }catch(err){

        return res.status(500).send({
            message:err,
            
        })

    }
}


//get all acount details
const getUserById =  async (req,res) => {
    try{
        const id = req.params.id;
        const AccountData = await User.findById(id);
        return res.status(200).send({
            data:AccountData
        });

    }catch(err){

        return res.status(500).send({
            message:err
        })

    }
}

//update details
const updateUserById =  async (req,res) => {
    try{

        
        const id = req.params.id;
        User.findByIdAndUpdate(id,{
            $set : req.body
        },(err) => {
            if(err){
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                message: "updated successfully!"
            });

        })
       
    }catch(err){

        return res.status(500).send({
            message:err
        })

    }
}

//delete Account
const deleteUserById = async (req, res) => {
    try{

        User.findByIdAndRemove(req.params.id).exec((err, deletedAccount) => {

      
            if (err) {
                return res.status(400).json({
                    message: "delete unsuccessful", deletedAccount
                });
            }
            return res.status(200).json({
                success: "Submission removed successful", deletedAccount
            });
        });

    }catch(err){
        return res.status(500).send({
            message:err
        })

    }
    
};



module.exports = {
    addUserData,
    getAllUserData,
    updateUserById,
    deleteUserById,
    getUserById
}