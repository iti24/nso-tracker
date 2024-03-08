const Location = require("../models/locationDetails");

const addLocation = async (req, res) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.status(201).json({ message: "Location details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      res.status(404).json({ message: "Location details not found" });
      return;
    }
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLocationDetails = async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body);
    if (!location) {
      res.status(404).json({ message: "Location update failed" });
      return;
    }
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteLocation = async (req, res) => {
  try {
    const deletedLocation = await Location.findByIdAndDelete(req.params.id);
    if (!deletedLocation) {
      res.status(404).json({ message: "Location details not found" });
      return;
    }
    res.status(200).json(deletedLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addLocation,
  getLocations,
  getLocationById,
  updateLocationDetails,
  deleteLocation,
};
