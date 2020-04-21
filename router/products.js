const express=require("express")
const router=new express.Router();
const mongoose=require("mongoose")
const Products=require("../model/products")
const Categories=require('../model/categories')

router.post("/saveProduct",async(req,res)=>{

    try{
       const getProductCategories=req.body.categories;
       const getProductCategoryValues=await getProductCategories.map(a => a.name.toLowerCase());
       const categories=await Categories.find( { name: { $in: getProductCategoryValues } });
       
       if(categories.length<getProductCategoryValues.length){
        res.status(400).send("Invalid/Duplicate category found")

       }
        let categoryArray=[]

        categories.forEach(async(aCategory)=>{
            const _id=aCategory.id;
            

            categoryArray.push({_id});


        })

        const products=new Products({
            name:req.body.name,
            categories:categoryArray

        })

        await products.save();

        res.status(200).send("Product saved successfully")



    }catch(e){
        res.status(200).send("Unable to add product")


    }
       
    
    
})

router.patch("/updateProduct/:id",async(req,res)=>{
    try{

    const product_id=req.params.id
    const product=await Products.findById(product_id)
    if(!product){
        res.status(400).send("Product not found")
    }

    product.name=req.body.name
    await product.save()

    return res.status(200).send("Product updated successfully")



    }catch(e){
        return res.status(400).send("Unable to update product")


    }
    
})

router.get("/allProducts/:id",async(req,res)=>{

    const category=await Categories.findById(req.params.id)

    if(!category){
        res.status(400).send("Category not found")

    }

    const product=await Products.find({categories:category.id})
    res.status(200).send(product)



})










module.exports=router