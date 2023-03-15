const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getSignleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../Controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getAllWorkouts);

// GET a single workout
router.get("/:id", getSignleWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
