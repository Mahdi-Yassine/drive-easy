import initialCars from "../data/cars";

// The car list is saved in the browser's localStorage so it survives a refresh.
// The first time, there is nothing saved, so we start with the cars in data/cars.js.
let cars = JSON.parse(localStorage.getItem("cars")) || initialCars;

function saveCars() {
  try {
    localStorage.setItem("cars", JSON.stringify(cars));
  } catch {
    alert("Could not save: the photo is too big. Try a smaller image.");
  }
}

export function getCars() {
  return cars;
}

export function addCar(car) {
  cars = [...cars, { ...car, id: Date.now() }];
  saveCars();
}

export function updateCar(updatedCar) {
  cars = cars.map((car) => (car.id === updatedCar.id ? updatedCar : car));
  saveCars();
}

export function deleteCar(id) {
  cars = cars.filter((car) => car.id !== id);
  saveCars();
}