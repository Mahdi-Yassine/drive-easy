import corolla from "../assets/images/corolla.jpg";
import sportage from "../assets/images/sportage.jpg";
import elantra from "../assets/images/elantra.jpg";
import sunny from "../assets/images/sunny.jpg";
import landCruiser from "../assets/images/land-cruiser.png";
import cClass from "../assets/images/c-class.jpg";
import x5 from "../assets/images/x5.jpg";
import picanto from "../assets/images/picanto.jpg";
import golf from "../assets/images/golf.jpg";
import hiace from "../assets/images/hiace.jpg";
import model3 from "../assets/images/model-3.jpg";
import mustang from "../assets/images/mustang.jpg";

// Initial dynamic list of cars.
// Photos are from Wikimedia Commons (see IMAGE_CREDITS.md for authors and licences).
const initialCars = [
  { id: 1, brand: "Toyota", model: "Corolla", year: 2023, type: "Sedan", transmission: "Automatic", pricePerDay: 35, image: corolla },
  { id: 2, brand: "Kia", model: "Sportage", year: 2022, type: "SUV", transmission: "Automatic", pricePerDay: 55, image: sportage },
  { id: 3, brand: "Hyundai", model: "Elantra", year: 2023, type: "Sedan", transmission: "Automatic", pricePerDay: 38, image: elantra },
  { id: 4, brand: "Nissan", model: "Sunny", year: 2021, type: "Sedan", transmission: "Manual", pricePerDay: 28, image: sunny },
  { id: 5, brand: "Toyota", model: "Land Cruiser", year: 2022, type: "SUV", transmission: "Automatic", pricePerDay: 120, image: landCruiser },
  { id: 6, brand: "Mercedes-Benz", model: "C-Class", year: 2023, type: "Luxury", transmission: "Automatic", pricePerDay: 110, image: cClass },
  { id: 7, brand: "BMW", model: "X5", year: 2022, type: "Luxury", transmission: "Automatic", pricePerDay: 140, image: x5 },
  { id: 8, brand: "Kia", model: "Picanto", year: 2022, type: "Hatchback", transmission: "Manual", pricePerDay: 22, image: picanto },
  { id: 9, brand: "Volkswagen", model: "Golf", year: 2021, type: "Hatchback", transmission: "Manual", pricePerDay: 32, image: golf },
  { id: 10, brand: "Toyota", model: "Hiace", year: 2020, type: "Van", transmission: "Manual", pricePerDay: 90, image: hiace },
  { id: 11, brand: "Tesla", model: "Model 3", year: 2023, type: "Electric", transmission: "Automatic", pricePerDay: 95, image: model3 },
  { id: 12, brand: "Ford", model: "Mustang", year: 2022, type: "Sports", transmission: "Automatic", pricePerDay: 130, image: mustang },
];

export default initialCars;
