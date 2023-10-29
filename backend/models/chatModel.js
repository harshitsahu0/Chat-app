const mongoose = require('mongoose');

const chatModels = mongoose.Schema(
    {
        chatName:{type:String,trim:true},
        isGroupChat:{type:Boolean,default:false},
        users:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
            },
        ],
        latestMassage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"message",
        },
        groupAdmin:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
        }
    },
    {
        timestamps:true
    }
);

const chat = mongoose.model("chat",chatModels);

module.exports=chat;