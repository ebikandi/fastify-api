import boom from "boom";
import Car from "../models/Car";

// Get all cars
const getCars = async () => {
  try {
    const cars = await Car.find();
    return cars;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single car by ID
const getSingleCar = async req => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new car
const addCar = async req => {
  try {
    const car = req.body;
    const { ...updateData } = car;
    const update = await Car.create(updateData);
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update a new car
const updateCar = async req => {
  try {
    const { id } = req.params;
    const car = req.body;
    const { ...updateData } = car;
    const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a car
const deleteCar = async req => {
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndRemove(id);
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export default { getCars, getSingleCar, addCar, updateCar, deleteCar };
