
const mongoose=require("mongoose")
const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true,
  },
  age:{
    type:Number,
    required:true
  },
  preferredBatch:{
    type:String,
    required:true
  }
});

const taskModel= mongoose.model('Task',taskSchema)
module.exports=taskModel;