import { memo, type FC } from 'react';
import arrow from "../../movies/images/arrow.svg"
import { useState } from "react";

interface Props {
  data: any[]
}

const AllActors: FC<Props> = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div style={{ scrollBehavior: "smooth" }} className="container mx-auto mb-[50px]">
      <div className='flex items-center gap-[10px]'>
        <p className='text-white text-[26px] font-semibold leading-[120%] tracking-[0.01em] mb-[20px]'>В ролях</p>
        <button className='rounded-[50%] bg-[#1d1d1d] size-[34px] mt-[-12px] flex justify-center items-center'>
          <img src={arrow} alt="" className='size-[18px]' />
        </button>
      </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-[20px] mb-[30px]">
        {
          data?.slice(0, showAll ? data.length : 8).map((actor: any) => (
            <div className="bg-[#1d1d1d]/70 mx-auto w-[273px] h-[100px] rounded-[12px] p-[12px] flex items-center gap-[12px]">
              <div className="max-w-[75px] max-h-[75px] w-full h-full rounded-[12px] bg-[#5d5d5d] overflow-hidden">
                {
                  actor.profile_path ?
                    <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} className="w-full h-full" alt="" />
                    :
                    <img src="https://avatars.mds.yandex.net/i?id=d68726cad34becda9c6577af86768c27f3ab26b9-4936102-images-thumbs&n=13" className='w-full h-full' alt="" />
                }
              </div>
              <div className="flex gap-[10px] justify-center flex-col">
                <p className='text-white text-[16px] font-semibold leading-[125%] tracking-[0.01em] line-clamp-1' title={actor.name}>{actor.name}</p>
                <p className='text-[#a1a1a1] text-[12px] font-semibold leading-[125%] tracking-[0.01em]'>В роли: {actor.character}</p>
              </div>
            </div>
          ))
        }
      </div>
      {data?.length > 8 &&
        <div className="w-full flex justify-center">
          <button className='bg-white py-[14px] px-[28px] text-center rounded-[12px] text-[#c61f1f] text-[16px] font-semibold leading-[120%] tracking-[0.01em] duration-300 hover:bg-[#c61f1f] hover:text-white' onClick={() => setShowAll(!showAll)}>{showAll ? "Скрыть" : "Показать все"}</button>
        </div>
      }
    </div>
  );
};

export default memo(AllActors);