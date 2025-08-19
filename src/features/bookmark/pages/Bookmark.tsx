import { memo } from 'react';
import { useSelector } from "react-redux";
import { type RootState } from "../../../app/store";
import MovieView from '../../movies/components/movie-view/MovieView';
import empty from "../images/cat_empty.png"

const Bookmark = () => {
  const savedMovies = useSelector((state: RootState) => state.saved.movies);
  return (
    <div className="mx-auto">
      {savedMovies && savedMovies.length > 0 ? (
        <>
          <h2 className='text-2xl font-bold text-center text-white mt-[50px] mb-[40px] text-[42px]'>Закладки</h2>
          <MovieView data={savedMovies} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center mt-[70px]">
          <img
            src={empty}
            alt="empty"
            className="w-60 h-60 object-contain mb-4 opacity-70"
          />
          <p className="text-gray-400 text-xl font-medium mb-[80px]">
            У вас пока нет закладок
          </p>
        </div>
      )}
    </div>
  );
};

export default memo(Bookmark);