type Movie = {
  title: string;
  releaseYear: number;
  rating: number;
};

const movies = [
  { title: "Silence", releaseYear: 2016, rating: 10 },
  { title: "Triangle of Sadness", releaseYear: 2022, rating: 7 },
  { title: "The Whale", releaseYear: 2022, rating: 8 },
  { title: "Jesus Revolution", releaseYear: 2023, rating: 8 },
  { title: "King Kong", releaseYear: 1933, rating: 4 },
];

const movesSortedByReleaseYear = (movies: Movie[]): Movie[] => {
  const reverseListSortedByRating = movies
    .sort((m1, m2) => m1.rating - m2.rating)
    .reverse();
  return reverseListSortedByRating.sort(
    (mo1, mo2) => mo1.releaseYear - mo2.releaseYear
  );
};

console.log(movesSortedByReleaseYear(movies));
