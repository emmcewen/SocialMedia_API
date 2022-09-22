const { Schema, model } = require('mongoose');
const moment = require('moment');

const ReactionsSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true

    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@+\..+/]
    },

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    ]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }


);

UserSchema.virtual('friendCount').get(function () {
    returthis.friends.length;

});

const User = model('User', UserSchema);

module.exports = User;