const router = require ('express').Router();

const {
    getThoughts,
    getOneThoughts,
    createThoughts,
    deleteThoughts,
    updateThoughts,
    createReaction,
    // deleteReactions,
}= require ('../../controllers/thoughtsController');


router
.route ('/')
.get(getThoughts)
.get(getOneThoughts)
.post(createThoughts)
.put(updateThoughts)
.delete(deleteThoughts);

router
    .route('/:thoughtsId/reactions')
    .post(createReaction);

// router

// .route('/:thoughtsId/reactions/:reactionId')
// // .delete(deleteReactions)



    module.exports = router;