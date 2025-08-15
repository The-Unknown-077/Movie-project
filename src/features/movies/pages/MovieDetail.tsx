import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../service/useMovie";

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById } = useMovie({});
  const { data, isLoading } = getMovieById(Number(id));

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  if (isLoading) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="text-white">
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative">
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center px-4">{data?.title}</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data?.title}
            className="w-full rounded-lg shadow-lg"
          />
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">{data?.title}</h2>
            <p className="italic text-lg text-gray-400">{data.tagline}</p>
            <p className="text-gray-300">{data?.overview}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <p><strong>Original Title:</strong> {data?.original_title}</p>
              <p><strong>Status:</strong> {data?.status}</p>
              <p><strong>Release Date:</strong> {data?.release_date}</p>
              <p><strong>Runtime:</strong> {data?.runtime} min</p>
              <p><strong>Rating:</strong> ⭐ {data?.vote_average} ({data?.vote_count} votes)</p>
              <p><strong>Popularity:</strong> {data?.popularity}</p>
              <p><strong>Budget:</strong> ${data?.budget}</p>
              <p><strong>Revenue:</strong> ${data?.revenue}</p>
            </div>
            <div>
              <strong>Genres:</strong> {data.genres.map((g: any) => g.name).join(", ")}
            </div>
            <div>
              <strong>Languages:</strong> {data.spoken_languages.map((l: any) => l.english_name).join(", ")}
            </div>
            <div className="flex items-center gap-[10px]">
              <strong className="mt-[5px]">Production:</strong>
              <div className="flex flex-wrap gap-3 mt-2">
                {data.production_companies.map((card: any) => (
                  <div key={card.id} className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${card.logo_path}`}
                      alt={card.name}
                      className="h-6 object-contain"
                    />
                    <span>{card.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href={data.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition"
            >
              Visit Official Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MovieDetail);
