const { NOTIFICATION } = require("../Models/notificationModel")

module.exports = {
    sentNotification : (req,res)=>{
        try {
            const {senderId="",recieverId="",broadcast=false,notification} = req.body
            const notificationTemplate = new NOTIFICATION({
                senderId:senderId,
                recieverId:recieverId,
                boradcast:broadcast,
                notification:notification
            })
            notificationTemplate.save().then((response)=>{
                res.status(200).json(response)
            }).catch((err)=>{
                res.status(400).json({message:err.message})
            })
        } catch (error) {
            res.status(500).json({message:"something went wrong"})
        }
    },
    getNotification :async (req,res)=>{
        try {
            const {userId} = req.params
            const notificationDetails = await NOTIFICATION.find({reciverId:userId}).sort({createdAt:-1}).limit(10)
            if(notificationDetails){
                res.status(200).json(notificationDetails)
            }else{
                res.status(400).json({message:"notifications not found"})
            }
        } catch (error) {
            res.status(500).json({message:"something went wrong "})
        }
    }
}