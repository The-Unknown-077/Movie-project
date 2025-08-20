import { memo } from 'react';
import MovieView from '../components/movie-view/MovieView';
import { useMovie } from '../../movies/service/useMovie';
import { Pagination, Select } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { useGenre } from '../service/useGenre';

const Movies = () => {
  const { getMovies } = useMovie()
  const { getGenres } = useGenre()
  const [params, setParams] = useSearchParams()

  const page = params.get("page") || "1"
  const with_genres = params.get("genre") || ""
  const sort_by = params.get("sort_by") || "popularity.desc"


  const { data } = getMovies({ page, with_genres, sort_by })
  const { data: genreData } = getGenres()
  const options = genreData?.genres?.map(({ id, name }: any) => ({ value: id.toString(), label: name }))

  const sortOptions = [
    { value: "popularity.desc", label: "Популярные (desc)" },
    { value: "popularity.asc", label: "Популярные (asc)" },
    { value: "release_date.desc", label: "Новые фильмы" },
    { value: "release_date.asc", label: "Старые фильмы" },
    { value: "vote_average.desc", label: "Высокий рейтинг" },
    { value: "vote_average.asc", label: "Низкий рейтинг" },
  ]


  const handleChange = (value: number) => {
    params.set("page", value.toString())
    setParams(params)

  }

  const handleChangeGenre = (value: string) => {
    params.set("genre", value)
    setParams(params)
  }

  const handleChangeSort = (value: string) => {
    params.set("sort_by", value)
    setParams(params)
  }

  return (
    <div className="Movies">
      <h2 className='text-2xl font-bold text-center text-white mt-[50px] mb-[40px] text-[42px]'>Фильмы</h2>
      <div className="container mx-auto mt-[30px] flex justify-between items-center -mb-[20px]">
        <div className="flex justify-center flex-col">
          <p className='text-center text-white text-[16px] font-semibold leading-[125%] tracking-[0.01em] mb-[18px]'>Жанр</p>
          <Select
            onChange={handleChangeGenre}
            className="
            w-44 
            flex
            justify-center
            items-center
            [&_.ant-select-selector]:!bg-transparent 
            [&_.ant-select-selector]:!border-[#555] 
            [&_.ant-select-selector]:!rounded-xl
            [&_.ant-select-selector]:!h-11
            [&_.ant-select-selection-item]:!text-white 
            [&_.ant-select-selection-placeholder]:!text-gray-400 
            [&_.ant-select-arrow]:!text-white 
            [&_.ant-select-arrow]:!flex
            [&_.ant-select-arrow]:!items-center
            [&_.ant-select-arrow]:!justify-center
            [&_.ant-select-selector:hover]:!border-[#888]
            [&_.ant-select-selector:focus-within]:!border-blue-500
            shadow-md
            transition-all
          "
            placeholder="Select genre"
            options={options}
            value={with_genres || undefined}
          />
        </div>

        <div className="">
          <p className='text-white text-center text-[16px] font-semibold leading-[125%] tracking-[0.01em] mb-[18px]'>Сортировка</p>
          <Select
            onChange={handleChangeSort}
            className="
            w-44 
            flex
            justify-center
            items-center
            [&_.ant-select-selector]:!bg-transparent 
            [&_.ant-select-selector]:!border-[#555] 
            [&_.ant-select-selector]:!rounded-xl
            [&_.ant-select-selector]:!h-11
            [&_.ant-select-selection-item]:!text-white 
            [&_.ant-select-selection-placeholder]:!text-gray-400 
            [&_.ant-select-arrow]:!text-white 
            [&_.ant-select-arrow]:!flex
            [&_.ant-select-arrow]:!items-center
            [&_.ant-select-arrow]:!justify-center
            [&_.ant-select-selector:hover]:!border-[#888]
            [&_.ant-select-selector:focus-within]:!border-blue-500
            shadow-md
            transition-all
          "
            placeholder="Select sort"
            options={sortOptions}
            value={sort_by || undefined}
          />
        </div>
      </div>

      <MovieView data={data?.results} />
      <div className="mb-[70px] mt-[-50px]">
        <Pagination current={Number(page)} onChange={handleChange} showSizeChanger={false} align='center' defaultPageSize={1} total={data?.total_pages} />
      </div>
    </div>
  );
};

export default memo(Movies);