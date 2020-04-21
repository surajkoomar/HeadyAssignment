const mongoose=require('mongoose')
const mySchema=new mongoose.Schema({

name:{
    type:String,
    required:true
},

categories:[ 
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categories"
    }
        
]

   


    
},{
    timestamps:true
})





const Products = mongoose.model('Products', mySchema);
module.exports=Products;
