// Import our controllers
import carController from "../controllers/carController";
import carApi from "./documentation/carApi";

const routes = [
  {
    method: "GET",
    url: "/api/cars",
    handler: carController.getCars
  },
  {
    method: "GET",
    url: "/api/cars/:id",
    handler: carController.getSingleCar
  },
  {
    method: "POST",
    url: "/api/cars",
    handler: carController.addCar,
    schema: carApi.addCarSchema
  },
  {
    method: "PUT",
    url: "/api/cars/:id",
    // handler: carController.updateCar
    handler: carController.updateCar
  },
  {
    method: "DELETE",
    url: "/api/cars/:id",
    handler: carController.deleteCar
  }
];

export default routes;
