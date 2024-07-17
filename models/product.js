

// const mongoose = require('mongoose');
// require('mongoose-double')(mongoose);

// const Schema= mongoose.Schema
 
// const productSchema = new mongoose.Schema({
//   productImage:{
//     type:String,
//     required:true
//   },
//   productNameEng:{
//     type:String,
//     required:true
//   },
//   productNameAr:{
//     type:String,
//     required:true
//   },
//   category:{
//     type: Schema.Types.ObjectId ,
//     required:true,
//     ref :"category"
//   },
//   stock:{
//     type:Number,
//     required:true
//   },
//   rate:{
//     type:Schema.Types.double,
//     required:true
//   },
//   numberOfReviws:{
//     type:Number,
//     required:true
//   },
//   colors:{
//     type:[String],
//     required:true
//   },
//   sizes:{
//     type:[String],
//     required:true
//   },
//   description:{
//     type:String,
//     required:true
//   },
//   price:{
//     type:Schema.Types.double,
//     required:true
//   },
//   inFavorites:{
//     type:Boolean, 
//   },




// }, { timestamps: true });

// module.exports = mongoose.model('Product', productSchema);















const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;

const productSchema = new mongoose.Schema({
  productImage: {
    type: String,
    required: true
  },
  productNameEng: {
    type: String,
    required: true
  },
  productNameAr: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "category"
  },
  stock: {
    type: Number,
    required: true
  },
  rate: {
    type: SchemaTypes.Double,
    required: true
  },
  numberOfReviews: {
    type: Number,
    required: true
  },
  
  colors: {
    type: [String],
    required: true
  },
  sizes: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: SchemaTypes.Double,
    required: true
  },
  inFavorites: {
    type: Boolean,
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);






// const mongoose=require('mongoose');
//   require('mongoose-double')(mongoose);
//   const SchemaTypes = mongoose.Schema.Types;
//  const product=mongoose.Schema({
//     ProductName:{type:String},
//     ProductPrice:{ type: String},
//     ProductDescription:{type:String},
//     ProductRate:{ type: String },
   

// },{timestamps:true});

// module.exports=mongoose.model('Product',product);