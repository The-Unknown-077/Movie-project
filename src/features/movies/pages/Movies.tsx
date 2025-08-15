import { memo } from 'react';
import MovieView from '../components/movie-view/MovieView';
import { useMovie } from '../../movies/service/useMovie';


const Movies = () => {
  const { getMovies } = useMovie({page: 1, without_genres: "10749,36,18,99,27"})
  const { data } = getMovies()
  return (
    <div className="Movies">
      <MovieView data={data?.results} />
    </div>
  );
};

export default memo(Movies);