import boom from "booom";
import Car from "../models/Car";

// Get all cars
const getCars = async () => {
  try {
    const cars = await Car.find();
    return cars;
  } catch (err) {
    throw boom.bomify(err);
  }
};

// Get single car by ID
const getSingleCar = async req => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    return car;
  } catch (err) {
    throw boom.bomify(err);
  }
};

// Add a new car
const addCar = async req => {
  try {
    const { id } = req.params;
    const car = req.body;
    const { ...updateData } = car;
    const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.bomify(err);
  }
};

// Delete a car
const deleteCar = async req => {
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndRemove(id);
    return car;
  } catch (err) {
    throw boom.bomify(err);
  }
};

export { getCars, getSingleCar, addCar, deleteCar };
