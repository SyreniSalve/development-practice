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
  const car = carArray.reduce((car1, car2) =>
    car1.year < car2.year ? car1 : car2
  );
  return `${car?.make} ${car?.model}`;
};

console.log(findOldestCar(arrOfCars));
