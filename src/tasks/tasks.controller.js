const users = []
let id = 1

const findAllUsers = () => {
    return users
}

const findUsersById = id => {
    const user = users.find(item => item.id == id)
    return user
}

const createUser = obj => {
    const newUser =
    {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password:obj.password,
        birthday: obj.birthday
    }
    users.push(newUser)
    return newUser
}

const updateUser = (id,obj) =>{
    const remove= users.find(user=>user.id==id)
    const index= users.indexOf(remove)
    console.log(remove)
    const putUser = 
    {
        id:parseInt(id),
        first_name: obj.first_name || remove.first_name ,
        last_name: obj.last_name || remove.last_name,
        email: obj.email || remove.email ,
        password:obj.password || remove.password ,
        birthday: obj.birthday || remove.birthday
    }
    users.splice(index,1,putUser)
    return {putUser,remove}
} 

const deleteUser = data=>{
    const index= users.indexOf(data)
    users.splice(index,1)
    return users
} 

module.exports={
    findAllUsers,
    findUsersById,
    createUser,
    updateUser,
    deleteUser
}