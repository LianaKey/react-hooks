function sortMoviesData(payload) {
  class Movie {
    constructor(data, i) {
      this.title = payload["titles"][i];
      this.release = payload["releases_years"][i];
      this.budget = payload["budget"][i];
      this.box = payload["box_office"][i];
      this.profit = this.box - this.budget;
    }
  }

  const n_movies = [];

  if(payload.titles){
    for (var i = 0; i < payload.titles.length; i++) {
      n_movies[i] = new Movie(payload, i);
    }
  }

  return n_movies;
}

export default sortMoviesData;
