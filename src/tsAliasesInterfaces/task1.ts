interface Car {
  make: string;
  model: string;
  year: number;
}

const arrOfCars: Car[] = [
  { make: "Toyota", model: "Avensis", year: 2002 },
  { make: "Toyota", model: "Corolla", year: 2009 },
  { make: "BMW", model: "Sedan", year: 1999 },
];

const findOldestCar = (carArray: Car[]): string => {
  const oldestCar = Math.min(...carArray.map((car) => car.year));
  const car = carArray.find((car) => car.year === oldestCar);
  return `${car?.make} ${car?.model}`;
};

console.log(findOldestCar(arrOfCars));
