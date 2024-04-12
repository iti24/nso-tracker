const OutletSale = require('../models/outletSalesAnalysis');

const addOutletSale = async (req, res) => {
  try {
    const outletSale = new OutletSale(req.body);
    await outletSale.save();
    res.status(201).json({ message: "Outlet sale details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOutletSales = async (req, res) => {
  try {
    const outletSales = await OutletSale.find();
    res.status(200).json(outletSales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOutletSaleById = async (req, res) => {
  try {
    const outletSale = await OutletSale.findById(req.params.id);
    if (!outletSale) {
      res.status(404).json({ message: "Outlet sale details not found" });
      return;
    }
    res.status(200).json(outletSale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOutletSale = async (req, res) => {
  try {
    const outletSale = await OutletSale.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!outletSale) {
      res.status(404).json({ message: "Outlet sale update failed" });
      return;
    }
    res.status(200).json(outletSale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOutletSale = async (req, res) => {
  try {
    const deletedOutletSale = await OutletSale.findByIdAndDelete(req.params.id);
    if (!deletedOutletSale) {
      res.status(404).json({ message: "Outlet sale details not found" });
      return;
    }
    res.status(200).json(deletedOutletSale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addOutletSale,
  getOutletSales,
  getOutletSaleById,
  updateOutletSale,
  deleteOutletSale,
};
