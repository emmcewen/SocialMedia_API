const { Schema, model, Types } = require("mongoose");
const router = require ('express').Router();

const reactionsSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default:() => new Types.ObjectId()

    },
    reactionBody: {
        type:String,
        required: true,
        maxlength: 200
    },

    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment (createdAtVal).format ('MMM DD, YYYY [at] hh:mm a')
    }
    },
    
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id:false
    }
);

module.exports= reactionsSchema