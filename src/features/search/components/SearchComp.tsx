import { Input } from 'antd';
import { memo, type FC } from 'react';
import searchSvg from "../images/search-line (1).svg"
import { useDebounce } from "@uidotdev/usehooks";
import { useSearch } from '../service/useSearch';
import MovieView from '../../movies/components/movie-view/MovieView';
import notFound from "../../bookmark/images/cat_empty.png"

interface Props {
    value: string;
    setValue: (value: string) => void;
}

const SearchComp: FC<Props> = ({ value, setValue }) => {
    const debouncedSearchTerm = useDebounce(value, 500);
    const { getMoviesBySearch } = useSearch()
    const { data } = getMoviesBySearch({ query: debouncedSearchTerm })

    return (
        <div className="mx-auto mt-[38px]">
            <h2 className='text-[36px] font-bold text-center text-white mb-[28px]'>Поиск</h2>
            <div className="flex justify-center mb-[35px]">
                <Input
                    placeholder="Поиск"
                    size="middle"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    prefix={<img className='pr-[12px]' src={searchSvg} alt="" />}
                    className="!w-[380px] !outline-none !ring-0 !text-[#fff] !bg-[#111] !h-[64px] !rounded-[12px] !p-[20px]"
                    classNames={{
                        input: `
            !text-white 
            placeholder:!text-gray-400 
            !border-0 
            focus:!outline-none 
          `,
                    }}
                />
            </div>
            {
                data?.results ?
                <MovieView data={data?.results} />
                :
                <div className="flex flex-col gap-[15px] justify-center items-center">
                    <img className='w-[250px]' src={notFound} alt="" />
                    <p className='text-[#4d4d4d] text-[20px] font-medium leading-[120%] tracking-[0.01em]'>Пока вашему запросу ничего не найдена</p>
                </div>
            }
        </div>
    );
};

export default memo(SearchComp);