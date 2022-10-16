const { User, Thoughts} = require ('../models');

const thoughtsController = {
    getThoughts (req, res){
        Thoughts.find ({})
        .then ((thoughts)=> res.json(thoughts))
        .catch ((err)=> res.status (500).json (err));
    },

    getoneThoughts(req, res) {
        Thoughts.findOne ({_id: req.params.thoughtsId})
        .select ("__v")
        .then ((thoughts)=>
        !thoughts
        ? res.status (404).json ({message: {"Not valid Id"})
        :res.json (thoughts)
        )
        .catch ((err)=> res.status(500).json (err));
        },
        createThoughts ((req,res){
            Thoughts.create (req.body)
            .then (({_id})=>{
                return User.findOneAndUpdate(
                    {_id req.body.userId},
                    {$push: {thoughts:_id}},
                    {new:true}
                );
            })
            .then ((thoughts)=>
            !thoughts
        ? res.status (404).json ({message:Not valid Id})
        : res.json (thoughts)
        )
        .catch ((err)=> res.status(500).json (err));
        },

        updateThoughts (req, res){
            Thoughts.findOneAndUpdate(
                {_id: req.params.thoughtsId},
                {$set: req.body},
                { runValidators: true, New: true}
            )
            .then ((user)=>
            !user
            ? res.status (404).json ({message:Not valid Id})
            : res.json (user)

            )
            .catch ((err)=> res.status(500).json (err));
        },

        deleteThoughts (req, res) {
            Thoughts.findOneAndDelete ({_id: req.params.thoughtsId}),
            .then ((thoughts)=>
            !thoughts
        ? res.status (404).json ({message:"Not valid Id"})
        : User.findOneAndUpdate(
            {thoughts req.params.thoughtsId},
            {$pull: {thoughts: req.params.thoughtsId}},
            {new:true}
        )
        )
        .then ((user)=>)
        !user
            ? res.status (404).json ({message:"Not valid id"})
            : res.json ({message: "successfully deleted"})

        )
        .catch((err)=> res.status(500).json (err));

        },

        createReaction (req, res){
            Thoughts.findOneAndUpdate (
                {_id: req.params.thoughtsId},
                { $addToSet:{reactions: req.body}},
                {runValidators:true, new: true}
            )
            .then ((thoughts)=>
            !thoughts
            ? res.status (404).json ({message:"Not valid Id"})
            : res.json (thoughts)
            )
            .catch((err)=> res.status(500).json (err));
        },

        deleteReactions (req, res){
       Thoughts.findOneAndUpdate (
                {_id: req.params.thoughtsId},
                { $pull:{reactions: {reactionsId: req.params.reactionId}}},
                {runValidators:true, new: true}
            )
            .then ((thoughts)=>
            !thoughts
            ? res.status (404).json ({message:"Not valid Id"})
            : res.json (thoughts)
            )
            .catch((err)=> res.status(500).json (err));
        },
    };