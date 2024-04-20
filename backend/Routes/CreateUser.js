const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const jwtSecret = "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk";

const bcrypt = require("bcryptjs");

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        password: secPassword,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    let pwdCompare;
    let userData;
    try {
       userData = await User.findOne({ email });
       pwdCompare = await bcrypt.compare(req.body.password,userData.password);
      
       if (!pwdCompare) {
        return res.status(400).json({ errors: "try Logging In with Correct Credentials" });
      }
      const data = { user: { id: userData.id } };

      const authToken = jwt.sign(data, jwtSecret); 
      return res.json({ success: true , authToken: authToken  });
    } catch (error) {
     
      console.log(error);
      res.json({ success: false ,result:pwdCompare,dspwd:userData.password,givenpwd:req.body.password});
    }
  }
);
module.exports = router;
