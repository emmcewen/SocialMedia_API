const { Schema, model} = require('mongoose');

const userSchema= new Schema ({
    username: {
        type:String,
        unique: true,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true
    },
    id:false
}

);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;

  });

const User = model('user', userSchema);

module.exports = User;

