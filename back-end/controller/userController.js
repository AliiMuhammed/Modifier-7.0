const util = require("util");
const bcrypt = require("bcrypt");
const fs = require("fs");
const {
  getUserById,
  updateUser,
  deleteUser,
  showusers,
  updateimage,
  addService
} = require("../services/userSevices");

const {getServiceById} = require('../services/servicesServices')


async function update(req, res) {
  try {
    // const errors = req.validationErrors();
    // if (!errors) {
    //   return res.status(400).json({ errors: "error" });
    // }

    const user = await getUserById(req.params.id);
    if (!user[0]) {
      return res.status(404).json({ errors: [{msg:"User not found"}] });
    }

    const userObj = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      phone: req.body.phone,
    };

    if (req.file) {
      userObj.image = req.file.filename;
      if (user && user.image) {
        fs.unlinkSync("../upload/" + user[0].image);
      }
    }

    await updateUser(user[0].id, userObj);

    res.status(200).json({
      msg: "User updated",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{msg:"Internal server error"}] });
  }
}

async function updateImage(req, res) {
  try {
    const user = await getUserById(req.params.id);
    if (!user[0]) {
      return res.status(404).json({ errors: [{msg:"User not found"}] });
    }
    let userObj = {
      image: req.file.filename,
    };

    if (req.file) {
      userObj.image = req.file.filename;
      if (user && user.image) {
        console.log("flag");
        fs.unlinkSync("../upload/" + user[0].image);
      }
    }

    await updateimage(user[0].id, userObj);

    res.status(200).json({errors:[{
      msg: "Image updated",
    }]});
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{msg:"Internal server error"}] });
  }
}

async function deleteU(req, res) {
  try {
    // const errors = req.validationErrors();
    // if (!errors) {
    //   return res.status(400).json({ errors: "error" });
    // }

    const user = await getUserById(req.params.id);
    if (!user[0]) {
      return res.status(404).json({ errors: ["User not found"] });
    }

    if(user[0].image){
      fs.unlinkSync("./upload/" + user[0].image);
      }

    await deleteUser(user[0].id);

    res.status(200).json({
      msg: "User Deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

async function showUsers(req, res) {
  try {
    const users = await showusers();
    if (users) {
      users.map((user) => {
        user.image_url = "http://" + req.hostname + ":5000/" + user.image;
        delete user.password;
      });
      delete users.password;
      res.status(200).json(users);
    } else {
      res.status(404).json({ errors: [{msg:"No Users found"}] });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{msg:"Internal server error"}] });
  }
}

async function showUser(req, res) {
  try {
    const user = await getUserById(req.params.id);
    if (!user[0]) {
      return res.status(404).json({ errors: [{msg:"User not found"}] });
    }

    if (user) {
      user[0].image = "http://" + req.hostname + ":5000/" + user[0].image;
      res.status(200).json(user);
    } else {
      res.status(404).json({ errors: [{msg:"No users found"}] });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{msg:"Internal server error"}] });
  }
}

async function selectService(req, res) {
   try{ 
    const user = await getUserById(req.params.user_id);
    if (!user[0]) {
      return res.status(404).json({ errors: [{msg:"User not found"}] });
    }
    const service = await getServiceById(req.params.service_id);
    if (!service[0]) {
      return res.status(404).json({ errors: [{msg:"Service not found"}] });
    }

    const Obj = {
      user_id: req.params.user_id,
      service_id: req.params.service_id,
      date: new Date().toISOString()
    };
    res.status(200).json(await addService(Obj));

  }catch(err){
    console.log(err);
    res.status(500).json({ errors: [{msg: "Internal Server Error"}] });
  }
}

module.exports = {
  update,
  deleteU,
  showUsers,
  showUser,
  updateImage,
  selectService
};
