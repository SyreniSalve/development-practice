type Movie = {
  title: string;
  releaseYear: number;
  rating: number;
};

const movies = [
  { title: "Jesus Revolution", releaseYear: 2023, rating: 8 },
  { title: "Silence", releaseYear: 2016, rating: 10 },
  { title: "Triangle of Sadness", releaseYear: 2022, rating: 7 },
  { title: "King Kong", releaseYear: 1933, rating: 4 },
  { title: "The Whale", releaseYear: 2022, rating: 8 },
];

const movesSortedByReleaseYear = (movies: Movie[]): Movie[] =>
  movies.sort((m1, m2) =>
    m1.releaseYear !== m2.releaseYear
      ? m1.releaseYear - m2.releaseYear
      : m2.rating - m1.rating
  );

console.log(movesSortedByReleaseYear(movies));
