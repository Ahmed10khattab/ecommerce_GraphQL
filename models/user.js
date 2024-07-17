// const mongoose=require('mongoose');
// const UserSchema=mongoose.Schema({
//     username:{type:String,required:true},
//     email:{type:String,required:true},
//     password:{type:String,required:true},
//     phone:{type:Number,required:true},
//     address:[{type:String,required:true,ref:"address"}],
//     isAdmin:{type:Boolean,required:false},
//     deviceToken:{type:String},
//     userImage:{type:String},
//     gander:{type:String, required:true},      
    
// });
// module.exports=mongoose.model('Users',UserSchema);




const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,required:false},

     phone:{type:Number,required:true},
    //  address:[{type:String,required:true,ref:"address"}],
    address:{type:String,required:true},

     deviceToken:{type:String},
     userImage:{type:String},
     gander:{type:String, required:true},      
    
});
module.exports=mongoose.model('Users',UserSchema);