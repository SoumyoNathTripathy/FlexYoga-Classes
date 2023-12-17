const taskModel=require("../model/task-model")

 
const createTask = async (req, res) => {
    const newTask = new taskModel({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      preferredBatch: req.body.preferredBatch,
    });
  
    try {
      await newTask.save();
  
      // Assuming CompletePayment() is an asynchronous function
      const paymentData = await CompletePayment(); // Perform payment operation
  
  
      res.status(200).json({ message: 'Record created and payment processed successfully', paymentData });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
const CompletePayment=async()=>{
    const paymentReceivedMsg = { message: "success" };

    
    return paymentReceivedMsg;
}

module.exports={
    
    createTask,
  
}