const util = require("util");
const fs = require("fs");
const {
  getFeedById,
  createFeed,
  deleteFeedback,
  showfeeds,
} = require("../services/feedbackServices");
const {getUserById} = require('../services/userSevices')


async function create(req, res) {
  try {
    const errors = req.validationErrors();
    if (!errors) {
      return res.status(400).json({ errors: "error" });
    }


    const user = await getUserById(req.params.user_id);
    if (!user[0]) {
      return res.status(404).json({ errors: ["User not found"] });
    }
    // INSERT NEW Feedback
    const feedData = {
      comment	: req.body.comment	,
      rating: req.body.	rating,
      services: req.body.services,
      user_id: req.params.user_id,
    };

    await createFeed(feedData);

    res.status(200).json({
      msg: "Feedback created successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

async function deleteFeed(req, res) {
  try {
    const errors = req.validationErrors();
    if (!errors) {
      return res.status(400).json({ errors: "error" });
    }

    const feedback = await getFeedById(req.params.id);
    if (!feedback[0]) {
      return res.status(404).json({ errors: ["Feedback not found"] });
    }

    await deleteFeedback(feedback[0].id);

    res.status(200).json({
      msg: "Feedback Deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

async function showFeeds(req, res) {
  try {
    const feedbacks = await showfeeds();
    if (feedbacks) {
      res.status(200).json(feedbacks);
    } else {
      res.status(404).json({ errors: ["No Feedback found"] });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}



module.exports = {
  create,
  deleteFeed,
  showFeeds,
};
