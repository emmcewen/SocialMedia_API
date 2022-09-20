const router = require ('express').Router();

const {
    getAllThoughts,
    getThoughtsId,
    createThoughts,
    deleteThoughts,
    createReaction,
    deleteReaction,
}= require ('../../controllers/thoughts-controller');


router
.route ('/')
.get(getAllThoughts)
.put(updateThoughts)
.delete(deleteThoughts);

router
    .route('')

router

.route('/:thoughtsId/reactions/:reactionId')
.delete(deleteReaction)



    module.exports = router;