const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const BookSchema=new Schema({
    ISBN:{
        type:String,
        required:true
    },
    genresAndCategories:{
        type:String,
        required:true
    },
    tagsAndKeywords:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    edition:{
        type:String,
        required:true
    },
    accessionNo:{ //parigrahana ankaya
        type:String,
        required:true
    },
    dateOfEntry:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true,
        unique:true
    },
    additionalContributors:{
        type:String,
        required:false
    },
    bookName:{
        type:String,
        required:false
    },
    publisherName:{
        type:String,
        required:false
    },
    publishedYear:{
        type:String,
        required:false
    },
    price:{
        type:String,
        required:false
    },
    noOfPages:{
        type:String,
        required:false
    },
    supplyID:{ //khmd hambune kiyala -> replacement, donation, government grants, purchaising
        type:String,
        required:false
    },
    donationID:{
        type:String,
        required:false
    },
    replacementID:{
        type:String,
        required:false
    },
    governmentGrantsID:{
        type:String,
        required:false
    },
    purchasingID:{
        type:String,
        required:false
    },
    removalID : {
        type:Boolean,
        required:false
    },
    noteID:{
        type:String,
        required:false
    },
    cupboardNo:{
        type:String,
        required:false
    },
    rowNumber:{
        type:Object,
        required:false
    },
    condition:{
        type:String,
        required:false
    },
    damageID:{
        type:String,
        required:false
    },
    reservationID:{
        type:String,
        required:false
    }
})
const Book=mongoose.model("Book",BookSchema);
module.exports=Book;