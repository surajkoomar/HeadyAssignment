const express=require('express')
const app=express();
const mongoose=require("../db/mongoose")

const Categories=require('../model/categories')
const router=new express.Router();


router.post('/saveCategory',async(req,res)=>{

    try{
        const category=new Categories(req.body)
        await category.save()
        res.status(200).send('Category saved successfully')

    }catch(e){
        res.status(400).send('Unable to save category')
    }
    
})

router.get("/getAllCategories",async(req,res)=>{

    const categories=await Categories.find({})

    res.status(200).send(categories)

})



module.exports=router