

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryNameAr :{
    type:String,
    required:true,
 },
 categoryNameEng :{
    type:String,
    required:true,
 },
 categoryImage :{
    type:String,
    required:true,
 },
 categoryIcon :{
    type:String,
    required:true,
 },
 
 categoryProductCount:{
    type:Number,
    required:true, 
 }


}, { timestamps: true });

module.exports = mongoose.model('category', categorySchema);