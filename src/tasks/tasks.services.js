const taskControllers = require('./tasks.controller')

const getAllUsers = (req,res)=>{
    const data = taskControllers.findAllUsers()
    res.status(200).json(data) 
} 

const getUserById= (req,res)=>{
    const id = req.params.id
    const data= taskControllers.findUsersById(id)
    if(data){
        res.status(200).json(data)
    }else{
        res.status(404).json({message:'Invalid ID'})
    }
}

const postUser = (req,res) => {
    const {first_name,last_name,email,password,birthday}= req.body
    if(first_name && last_name && email && password && birthday){
        const data = taskControllers.createUser({first_name,last_name,email,password,birthday})
        res.status(201).json(data)
    }else{
    res.status(400).json({message:'Invalid Data'})
    }
    }

    const patchUser = (req,res) => {
        const id = req.params.id
        const {first_name,last_name,email,password,birthday}= req.body
        if(first_name || last_name || email || password || birthday ){
            const data = taskControllers.updateUser(id,{first_name,last_name,email,password,birthday})
            res.status(200).json({after:data.remove,
                before:data.putUser})
        }else{
            res.status(400).json({message:'Invalid Data or ID'})
        }
        
    }

    const removeUser = (req,res) => {
        const id = req.params.id
        const data= taskControllers.findUsersById(id)
        if(data){
            const newUsers= taskControllers.deleteUser(data)
            res.status(200).json({
                message:`User ${id} deleted`,
            NewUsers: newUsers
            })
        }else{
            res.status(404).json({message:'Invalid ID'})
        }
    }

    module.exports={
        getAllUsers,
        getUserById,
        postUser,
        removeUser,
        patchUser
    }