import Bundle from "../models/bundleModel.js";

export const getBundles = async (req, res) => {
  const bundles = await Bundle.find();
  res.json(bundles);
};

export const getBundleById = async (req, res) => {
  const bundle = await Bundle.findById(req.params.id);
  res.json(bundle);
};

export const addBundle = async (req, res) => {
  const bundle = new Bundle(req.body);
  await bundle.save();
  res.json(bundle);
};

export const addItemToBundle = async (req, res) => {
  const { item, quantity, donorId } = req.body;
  const bundle = await Bundle.findById(req.params.id);

  bundle.itemsReceived.push({ item, quantity, donorId });

  const complete = bundle.itemsRequired.every(reqItem => {
    const totalReceived = bundle.itemsReceived
      .filter(i => i.item === reqItem.item)
      .reduce((sum, i) => sum + i.quantity, 0);
    return totalReceived >= reqItem.quantity;
  });

  if (complete) bundle.status = "complete";
  await bundle.save();

  res.json(bundle);
};
