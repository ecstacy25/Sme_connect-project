import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  try {
    if (!req.isSeller)
      return next(createError(403, "Sorry, this action is restricted to Sellers only."));

    const newGig = new Gig({
      userId: req.userId,
      ...req.body,
    });

    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig)
      return next(createError(404, "Gig not found!"));

    if (gig.userId !== req.userId)
      return next(createError(403, "You can only delete your own gig!"));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig has been deleted!");
  } catch (err) {
    next(err);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig)
      return next(createError(404, "Gig not found!"));

    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};

export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };

  try {
    const sortOptions = { [q.sort]: -1 };
    const gigs = await Gig.find(filters).sort(sortOptions);
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
};
