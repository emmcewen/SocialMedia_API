const { Schema, model } = require('mongoose');
const moment = require('moment');
const { User } = require('.');

const userController={
    getAllUser (req,res) {
        User.find({})
        .select('-__v')
        .sort ({_id:-1})
        .then(dbUserData => res.json (dbUserData))
        .catch(err=> {
            console.log(err);
            res.sendStatus(400);
        });
    },

    getUserId, ({params},res){
        User.findOne ({_id.params.id})
        .populate ({
            path: 'thoughts',
            select: '-__v'
        })
        .populate ({
            path: 'friends',
            select: '-__v'
        })
    }
    createUser,
    deleteUser,
    addFriend,
    deleteFriend,
}= require ('../../controllers/user-controller');


router
.route ('/')
.get(getAllUser)
.post(createUser)

router
.route ('/')
.get(getUserId)
.put(createUser)
.delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

    module.exports = userController;