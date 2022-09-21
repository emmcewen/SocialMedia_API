const { Schema, model,Types} = require ('mongoose');
const moment =require ('moment');

const ReactionsSchema = new Schema ({
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

const ThoughtsSchema = new Schema({
    thoughtText: {
        type:String,
        required:true,
        minlength: 1,
        maxlength: 200
    },

    createdAt:{
        type: Date,
        default: Date.now,
        get: createdAtVal=> moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    
        toJSON: {
            virtuals: true,
            getters: true
        
        },
        id:false
    });

ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reaction.lenght;
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports =Thoughts;