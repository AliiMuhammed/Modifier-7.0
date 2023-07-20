const util = require("util");
const fs = require("fs");
const {
  getMemberById,
  updateMember,
  createMember,
  deleteMember,
  showmembers,
} = require("../services/aboutUsServices");

async function update(req, res) {
  try {
    const errors = req.validationErrors();
    if (!errors) {
      return res.status(400).json({ errors: "error" });
    }

    const member = await getMemberById(req.params.id);
    if (!member[0]) {
      return res.status(404).json({ errors: [{msg:"Member not found"}] });
    }

    const memberObj = {
        member_Name: req.body.member_Name,
        linkedin: req.body.linkedin,
        gitHub: req.body.gitHub,
        member_Role: req.body.member_Role,
        position: req.body.position
    };

    if (req.file) {
      memberObj.member_img = req.file.filename;
      if (member && member.member_img) {
        fs.unlinkSync("../upload/" + member[0].member_img);
      }
    }

    await updateMember(member[0].id, memberObj);

    res.status(200).json({
      msg: "Member updated",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{msg:"Internal server error"}] });
  }
}

async function create(req, res) {
  try {
    const errors = req.validationErrors();
    if (!errors) {
      return res.status(400).json({ errors: "error" });
    }

    if (!req.file) {
      // Check if image file exists
      return res.status(400).json({
        errors: [{ msg: "Image is Required" }],
      });
    }

    // INSERT NEW Member
    const memberData = {
      member_Name: req.body.member_Name,
      linkedin: req.body.linkedin,
      gitHub: req.body.gitHub,
      member_Role: req.body.member_Role,
      member_img: req.file.filename,
    };

    await createMember(memberData);

    res.status(200).json({
      msg: "Member created successfully",
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

    const member = await getMemberById(req.params.id);
    if (!member[0]) {
      return res.status(404).json({ errors: [{msg:"Member not found"}] });
    }

    fs.unlinkSync("./upload/" + member[0].member_img);

    await deleteMember(member[0].id);

    res.status(200).json({
      msg: "Member Deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{msg:"Internal server error"}] });
  }
}

async function showMembers(req, res) {
  try {
    const members = await showmembers();
    if (members) {
      members.map((member) => {
        member.member_img = "http://" + req.hostname + ":5000/" + member.member_img;
      });

      res.status(200).json(members);
    } else {
      res.status(404).json({ errors: [{msg:"No members found"}] });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{msg:"Internal server error"}] });
  }
}

async function showMember(req, res) {
  try {
    const member = await getMemberById(req.params.id);
    if (!member[0]) {
      return res.status(404).json({ errors: [{msg:"Member not found"}] });
    }

    if (member) {
      member[0].member_img = "http://" + req.hostname + ":5000/" + member[0].member_img;
      res.status(200).json(member);
    } else {
      res.status(404).json({ errors: [{msg:"No members found"}] });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{msg:"Internal server error"}] });
  }
}

module.exports = {
  update,
  create,
  deleteM,
  showMembers,
  showMember,
};
