import Bundle from "../models/bundleModel.js";


// Existing functions
export const getBundles = async (req, res) => {
  try {
    const bundles = await Bundle.find();
    res.json(bundles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBundleById = async (req, res) => {
  try {
    const bundle = await Bundle.findById(req.params.id);
    res.json(bundle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const addBundle = async (req, res) => {
  try {
    const { name, description, itemsRequired } = req.body;
    const bundle = await Bundle.create({
      name,
      description,
      itemsRequired,
      createdBy: req.user._id, // must exist
      itemsReceived: [],
    });
    res.status(201).json(bundle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 

export const addItemToBundle = async (req, res) => {
  try {
    const bundle = await Bundle.findById(req.params.id);
    if (!bundle) return res.status(404).json({ message: "Bundle not found" });

    const { item, quantity } = req.body;
    if (!item || !quantity)
      return res.status(400).json({ message: "Item and quantity required" });

    bundle.itemsReceived.push({ item, quantity, donatedBy: req.user._id });
    await bundle.save();

    res.json(bundle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// New function for NGO bundle creation
export const createBundle = async (req, res) => {
  try {
    if (req.user.role !== "ngo")
      return res.status(403).json({ message: "Only NGO can create bundles" });

    const bundle = await Bundle.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(bundle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
