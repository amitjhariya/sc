let users=[
    {'name':"amit",id:1},
    {'name':"sweta",id:2}
]

const getUsers= (req,res)=>{
    
    res.send(users)
}
const findUser=(req,res)=>{
    
    let user=users.filter(function(u) {
        return u.id == req.params.id;
      });

    res.send({"user":user})
}
module.exports={getUsers,findUser}