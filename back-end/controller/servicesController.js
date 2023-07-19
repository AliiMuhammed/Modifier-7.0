const util = require("util");
const fs = require("fs");
const {
  getServiceById,
  updateService,
  createService,
  deleteService,
  showservices,
} = require("../services/servicesServices");

async function update(req, res) {
  try {
    const errors = req.validationErrors();
    if (!errors) {
      return res.status(400).json({ errors: "error" });
    }

    const service = await getServiceById(req.params.id);
    if (!service[0]) {
      return res.status(404).json({ errors: ["Service not found"] });
    }

    const serviceObj = {
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
    };

    if (req.file) {
      serviceObj.img = req.file.filename;
      if (service && service.img) {
        fs.unlinkSync("../upload/" + service[0].img);
      }
    }

    await updateService(service[0].id, serviceObj);

    res.status(200).json({
      msg: "Service updated",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
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

    // INSERT NEW Service
    const serviceData = {
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      img: req.file.filename,
    };

    await createService(serviceData);

    res.status(200).json({
      msg: "Service created successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

async function deleteS(req, res) {
  try {
    const errors = req.validationErrors();
    if (!errors) {
      return res.status(400).json({ errors: "error" });
    }

    const service = await getServiceById(req.params.id);
    if (!service[0]) {
      return res.status(404).json({ errors: ["Service not found"] });
    }

    fs.unlinkSync("./upload/" + service[0].img);

    await deleteService(service[0].id);

    res.status(200).json({
      msg: "Service Deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

async function showServices(req, res) {
  try {
    const services = await showservices();
    if (services) {
      services.map((service) => {
        service.img = "http://" + req.hostname + ":5000/" + service.img;
      });

      res.status(200).json(services);
    } else {
      res.status(404).json({ errors: ["No Services found"] });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

async function showService(req, res) {
  try {
    const service = await getServiceById(req.params.id);
    if (!service[0]) {
      return res.status(404).json({ errors: ["Service not found"] });
    }

    if (service) {
      service[0].img = "http://" + req.hostname + ":5000/" + service[0].img;
      res.status(200).json(service);
    } else {
      res.status(404).json({ errors: ["No Services found"] });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

module.exports = {
  update,
  create,
  deleteS,
  showServices,
  showService,
};
