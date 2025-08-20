import { memo } from 'react';
import { useMovie } from '../../movies/service/useMovie';
import MovieView from '../../movies/components/movie-view/MovieView';
import Hero from '../components/Hero';

const Home = () => {
  //@ts-ignore
  const { getMovies } = useMovie()
  //@ts-ignore
  const { data } = getMovies({ page: 1, without_genres: "10749,36,18,99,27" })


  return (
    <div className="Home">
      <Hero />
      <MovieView data={data?.results} />
    </div>
  );
};

export default memo(Home);