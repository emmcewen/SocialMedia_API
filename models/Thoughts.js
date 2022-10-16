const { Schema, model, Types } = require("mongoose");
const moment = require("moment");
const reactionSchema = require("./reactions");
const thoughtsSchema = new Schema(
  {
    thoughtsText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 200,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const thoughts = model("Thoughts", thoughtsSchema);

module.exports = thoughts;
