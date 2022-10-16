const router = require ('express').Router();

const {
    getAllUser,
    getSingleUser,
    createUser,
    // deleteUser,
    // addFriend,
    // deleteFriend,
}= require ('../../controllers/user-controller');


router
.route ('/')
.get(getAllUser)
.post(createUser)

router
.route ('/')
.get(getSingleUser)
.put(createUser)
// .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    // .post(addFriend)
    // .delete(deleteFriend);

    module.exports = router;