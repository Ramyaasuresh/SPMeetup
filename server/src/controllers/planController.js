// src/controllers/planController.js
const { validationResult } = require("express-validator");
const Plan = require("../models/Plan");

exports.list = async (req, res, next) => {
  try {
    const plans = await Plan.find({ user: req.userId });
    res.json(plans);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { place, date, time } = req.body;
    const plan = await Plan.create({
      user: req.userId,
      place,
      date,
      time,
    });

    res.status(201).json(plan);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const plan = await Plan.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    res.json({ message: "Plan deleted" });
  } catch (err) {
    next(err);
  }
};
