const router = require("express").Router();

const {
  getAllThoughts,
  getSingleThought,
  createThoughts,
  deleteThoughts,
  updateThoughts,
  createReaction,
  deleteReactions,
} = require("../../controllers/thoughtsController");

router
  .route("/")
  .get(getAllThoughts)
  .get(getSingleThought)
  .post(createThoughts)
  .put(updateThoughts)
  .delete(deleteThoughts);

router.route("/:thoughtsId/reactions").post(createReaction);

router.route("/:thoughtsId/reactions/:reactionId").delete(deleteReactions);

module.exports = router;
