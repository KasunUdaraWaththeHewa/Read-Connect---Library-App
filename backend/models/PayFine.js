const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const PayFineSchema=new Schema({
    bookID:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    memberID:{
        type:String,
        required:true
    },
    memberName:{
        type:String,
        required:true
    },
    borrowalID:{
        type:String,
        required:true
    },
    returnID:{
        type:String,
        required:true
    },
    fineAmount:{
        type:String,
        required:true
    },
    paidAmount:{
        type:String,
        required:true
    },
    paidDate:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    },
})
const PayFine=mongoose.model("PayFine",PayFineSchema);
module.exports=PayFine;