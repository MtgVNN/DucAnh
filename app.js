const path = require('path');
const express = require('express')
const Product = require('./models/plane')
const mongoose = require('mongoose')
const app = express()
const fs = require('fs')

app.set('view engine', 'hbs')
app.use(express.urlencoded({extended: true}))


//Home page
app.get('/', async (req, res) => {
    const query = await Product.find()
    res.render('home', {'products':query})
})
//Add page
app.get('/newProduct', async (req, res) => {
    res.render('product/newProduct')
})
//view page
app.get('/viewProducts',async (req, res)=>{
    const query = await Product.find()
    res.render('product/allProduct', {'products':query})
})
//Sort by price
app.post('/sortByPrice',async (req, res)=>{
    const query = await Product.find().sort({price : -1})
    res.render('product/allProduct', {'products':query})
})
//Add Post
app.post('/newProduct',async (req, res) => {
    const name = req.body.txtName
    const price = req.body.txtPrice
    const description = req.body.txtDescription
    const picURL = req.body.picURL
    let errorPrice
    let errorMsg
    let flag = true
    if(name.trim().length == 0){
        errorMsg = "Name must not be empty!"
        flag=false
    }
    if(isNaN(price) == true){
        errorPrice = "Price must not contains characters!"
        flag=false
    }
    if (flag == true){
        const productEntity = new Product({'name':name,'price':price, 'description': description, 'picURL':picURL})
        await productEntity.save();
        res.redirect('/viewProducts')
    }
})
//Delete
app.get('/delete',async (req, res) => {
    const id = req.query.id
    await Product.deleteOne({'_id' : id})
    res.redirect('/') // redirect chi can link
})
//Search
app.post('/searchProduct',async (req, res) => {
    const searchText = req.body.txtSearch
    const query = await Product.find({'name':searchText})
    res.render('product/allProduct', {'products':query}) // render can ghi ca ten
})
const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Server is running at: " + PORT)