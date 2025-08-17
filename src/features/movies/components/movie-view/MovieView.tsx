import { memo, type FC } from "react";
import arrow from "../../images/arrow2.svg";
import { useLocation, useNavigate } from "react-router-dom";
import save from "../../images/bookmark.png"
import saved from "../../images/bookmark (1).png"
import { useDispatch, useSelector } from "react-redux";
import { toggleSave } from "../../../bookmark/redux/saved";
import { type RootState } from "../../../../app/store";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number
}

interface Props {
  data: Movie[] | undefined;
}

const MovieView: FC<Props> = ({ data }) => {

  const navigate = useNavigate();
  const pathname = useLocation().pathname
  const dispatch = useDispatch();
  const savedMovies = useSelector((state: RootState) => state.saved.movies);

  return (
    <div className={`container mx-auto px-[55px] ${pathname === "/movies" ? "pt-[58px]" : ""}`}>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[20px] text-white leading-[120%] tracing-[0.01em]">На неделе</p>
          <div className="flex justify-center items-center gap-[2px]">
            <p className="flex justify-center pb-[5px] items-center font-semibold text-[16px] text-[#c61f1f] leading-[120%] tracking-[0.01em] text-right">Показать все</p>
            <img className="flex justify-center items-center" src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="grid mx-auto lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[10px] mb-[118px]">
        {data?.map((movie: any) => {
          const isSaved = savedMovies.some((m) => m.id === movie.id);
          return (
            <div className="w-[280px] mx-auto h-[492px] mb-[20px] relative group" key={movie.id} >
              <div onClick={() => navigate(`/movie/${movie.id}`)} className={movie.poster_path ? "bg-[#1d1d1d] w-[280px] h-[400px] rounded-[12px] mb-[12px]" : "flex justify-center items-center bg-[#1d1d1d] w-[280px] h-[400px] rounded-[12px] mb-[12px]"}>
                {
                  movie.poster_path ?
                    <img className="w-full h-full rounded-[12px]" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                    :
                    <p className="text-[#c61f1f] text-center text-[22px] font-semibold leading-[114%] tracking-[0.01em]">Movie</p>
                }
              </div>
              <button
                onClick={() => dispatch(toggleSave(movie))}
                className="absolute bg-[#f2f2f2]/80 p-[7px] rounded-[8px] duration-300 opacity-0 group-hover:opacity-100 top-2 right-2 z-10"
              >
                <img
                  src={isSaved ? saved : save}
                  alt="save"
                  className="w-6 h-6"
                />
              </button>
              <div className="w-full">
                <h3 className="font-semibold w-full line-clamp-1 text-[24px] tracking-[0.01em] text-white mb-[8px]" title={movie.title}>{movie.title}</h3>
                <div className="flex justify-center flex-col gap-[5px]">
                  <div className="flex justify-baseline gap-[3px]">
                    <span className="text-[#4d4d4d] text-[14px] font-semibold leading-[114%] tracking-[0.01em]">Рейтинг:</span>
                    <p className="text-[#7d7d7d] text-[14px] font-semibold leading-[114%] tracking-[0.01em]">{movie.vote_average}</p>
                  </div>
                  <div className="flex gap-[3px]">
                    <p className="text-[#5d5d5d] text-[14px] font-semibold leading-[114%] tracking-[0.01em]">Голосов: </p>
                    <p className="text-[#7d7d7d] text-[14px] font-semibold leading-[114%] tracking-[0.01em]">{movie.vote_count}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default memo(MovieView);
