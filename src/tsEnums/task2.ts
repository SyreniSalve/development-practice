enum Week {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

enum Currencies {
    Euros = 0.82,
    Pounds = 0.73,
    Yen = 108.75,
}

const whatDayToday = (day: Week): string => `Today is ${day}`;

console.log(whatDayToday(Week.Friday));

const coverterInDollar = (amountOfMoney: number, currency: Currencies): string => (amountOfMoney / currency).toFixed(2);

console.log(coverterInDollar(12, Currencies. Euros));

