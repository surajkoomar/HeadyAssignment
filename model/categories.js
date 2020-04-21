const mongoose=require('mongoose')
const mySchema=new mongoose.Schema({

name:{
    type:String,
    required:true,
    unique:true,
    lowercase: true

},

child:[{

    name:{
        type:String,
        required:true
    },
    sub_child:[{

       name:{
           type:String,
           required:true

       }
    }]

}]

    
},{
    timestamps:true
})





const Categories = mongoose.model('Categories', mySchema);
module.exports=Categories;
