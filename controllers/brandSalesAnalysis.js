

const BrandSales = require('../models/brandSalesAnalysis');

const addBrandSale = async (req, res) => {
  try {
    const brandSale = new BrandSales(req.body);
    await brandSale.save();
    res.status(201).json({ message: "Brand sale details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBrandSales = async (req, res) => {
  try {
    const brandSales = await BrandSales.find();
    res.status(200).json(brandSales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBrandSaleById = async (req, res) => {
  try {
    const brandSale = await BrandSales.findById(req.params.id);
    if (!brandSale) {
      res.status(404).json({ message: "Brand sale details not found" });
      return;
    }
    res.status(200).json(brandSale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBrandSale = async (req, res) => {
  try {
    const brandSale = await BrandSales.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!brandSale) {
      res.status(404).json({ message: "Brand sale update failed" });
      return;
    }
    res.status(200).json(brandSale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBrandSale = async (req, res) => {
  try {
    const deletedBrandSale = await BrandSales.findByIdAndDelete(req.params.id);
    if (!deletedBrandSale) {
      res.status(404).json({ message: "Brand sale details not found" });
      return;
    }
    res.status(200).json(deletedBrandSale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addBrandSale,
  getBrandSales,
  getBrandSaleById,
  updateBrandSale,
  deleteBrandSale,
};
