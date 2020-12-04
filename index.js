require("dotenv").config();

//Go to OMDB api and get some gifs using Axios
const axios = require("axios");

const OMDB_API_BASE_URL = "http://www.omdbapi.com/";
const SEARCH_KEYWORD = "river";

axios
  .get(
    `${OMDB_API_BASE_URL}/?apikey=${process.env.OMDB_API_KEY}&s=${SEARCH_KEYWORD}`
  )
  .then((res) => {
    const movies = res.data.Search;
    movies.map((movie) => {
      console.log(movie.Poster);
    });
  });
