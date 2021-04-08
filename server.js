const express=require('express');
const Models =require('./models');

const Op=Models.Sequelize.Op;


const app=express();
const port=3000;

app.use(express.json());

app.get('/',async(req,res)=>{
    const AdminUser=await Models.admin_users.findAll({ include: [{
        model:Models.admin_roles
    }]});

    
    res.send(AdminUser);
});

app.get('/roles',async(req,res)=>{
    const roles=await Models.admin_roles.findAll({
        include:[{
            model:Models.admin_roles_policies
        }]
    })

    res.send(roles);


});

app.get('/role/:id',async(req,res)=>{
    const User=await Models.admin_users.findOne({
        where:{role_id:req.params.id}
    })

    res.send(User);
})

app.post('/',(req,res)=>{
    console.log(req.body);
    Models.Notes.create({
        name:req.body.name,
        tag:req.body.tag
    }).then(s=>{
        res.send(s);
    }).catch(err=>console.log(err));
});


app.get('/:id',async(req,res)=>{
    console.log(req.params);
    const Notes=await Models.Notes.findByPk(req.params.id);
    res.send(Notes);
})

app.put('/:id',async(req,res)=>{
    const Note=await Models.Notes.findByPk(req.params.id);
    Note.name=req.name;
    Note.tag=req.tag;
   const note= await Note.save();
    res.send(note);
});


app.delete('/:id',async(req,res)=>{
    await Models.Notes.destroy({where:{id:req.params.id}});
    res.send("deleted");
});


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
});
