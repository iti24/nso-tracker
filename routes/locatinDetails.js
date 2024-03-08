const express = require("express");
const router = express.Router();
const {
  addLocation,
  getLocations,
  getLocationById,
  updateLocationDetails,
  deleteLocation,
} = require("../controllers/locationDetails");

// Define routes for CRUD operations on locations
router.post("/", addLocation);
router.get("/", getLocations);
router.get("/:id", getLocationById);
router.put("/:id", updateLocationDetails);
router.delete("/:id", deleteLocation);

module.exports = router;
