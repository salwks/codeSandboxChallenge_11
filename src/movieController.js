import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  res.render("movies", { getMovies });
  console.log(getMovies());
};
export const movieDetail = (req, res) => res.render("detail");
export const filterMovie = (req, res) => {
  res.render("movies");
};
