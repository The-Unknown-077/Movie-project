import { memo, type FC } from "react";
import arrow from "../../images/arrow2.svg";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="container px-[55px]">
      <div className="mb-[20px]">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[20px] text-white leading-[120%] tracing-[0.01em]">На неделе</p>
          <div className="flex justify-center items-center gap-[2px]">
            <p className="flex justify-center pb-[5px] items-center font-semibold text-[16px] text-[#c61f1f] leading-[120%] tracking-[0.01em] text-right">Показать все</p>
            <img className="flex justify-center items-center" src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[20px] mb-[118px]">
        {data?.map((movie: any) => (
          <div className="w-[280px] h-[492px] mb-[20px]" key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
            <div className="bg-[#1d1d1d] w-[280px] h-[400px] rounded-[12px] mb-[12px]">
              <img className="w-full h-full rounded-[12px]" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            </div>
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
        ))}
      </div>
    </div>
  );
};

export default memo(MovieView);
