import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"


interface MovieParams {
  page?: number | string
  without_genres?: string,
  with_genres?: string,
  sort_by?: string,
  release_date_gte?: string,
  release_date_lte?: string
}

export const useMovie = () => {

    const getMovies = (params?: MovieParams) => useQuery({
        queryKey: ["movie-key", params],
        queryFn: ()=> api.get("/discover/movie", {params}).then(res => res.data)
    })
    // const getMovies = () => useQuery({
    //     queryKey: ["movie-key", params],
    //     queryFn: ()=> api.get("/discover/movie", {params: {...params, without_genres: "10749,36,18,99,27"}}).then(res => res.data)
    // })

    const getImages = (id: number, path: string, params?: MovieParams) => useQuery({
        queryKey: ["movie-key", params, id, path],
        queryFn: ()=> api.get(`/movie/${id}/${path}`, {params}).then(res => res.data)
    })
    const similarMovies = (id: number, path: string, params?: MovieParams) => useQuery({
        queryKey: ["movie-key", params, id, path],
        queryFn: ()=> api.get(`/movie/${id}/${path}`, {params}).then(res => res.data)
    })


    const getMovieById = (id?: number) => useQuery({
        queryKey: ["movie-key", id],
        queryFn: ()=> api.get(`/movie/${id}`).then(res => res.data)
    })

    // const createMovie = useMutation({
    //     mutationFn: (data: any)=> api.post("/discover/movie", data)
    // })


    return {getMovies, getMovieById, getImages, similarMovies}
}