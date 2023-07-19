const util = require("util");
const fs = require("fs");
const {
  getmessageById,
  createMessage,
  deleteMessage,
  showMessages,
} = require("../services/contactUsServices");


async function create(req, res) {
  try {
    const errors = req.validationErrors();
    if (!errors) {
      return res.status(400).json({ errors: "error" });
    }

    // INSERT NEW Message
    const messageData = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    };

    await createMessage(messageData);

    res.status(200).json({
      msg: "Message sent successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{msg:"Internal server error"}] });
  }
}

async function deleteM(req, res) {
  try {
    const errors = req.validationErrors();
    if (!errors) {
      return res.status(400).json({ errors: "error" });
    }

    const message = await getmessageById(req.params.id);
    if (!message[0]) {
      return res.status(404).json({ errors: [{msg:"Message not found"}] });
    }

    await deleteMessage(message[0].id);

    res.status(200).json({
      msg: "Message Deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{msg:"Internal server error"}] });
  }
}

async function showmessages(req, res) {
  try {
    const messages = await showMessages();
    if (messages) {
      res.status(200).json(messages);
    } else {
      res.status(404).json({ errors: [{msg:"No Messages found"}] });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{msg:"Internal server error"}] });
  }
}



module.exports = {
  create,
  deleteM,
  showmessages,
};
