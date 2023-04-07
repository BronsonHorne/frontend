import { useState } from 'react';
import data from './MovieData.json';

const moivedata = data.MovieData;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(moivedata);
  const addMovie = () => {
    setListOfMovies([
      ...moivedata,
      {
        Category: 'Action/Adventure',
        Title: 'Avengers, The',
        Year: 2012,
        Director: 'Joss Whedon',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
