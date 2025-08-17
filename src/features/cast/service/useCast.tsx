import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"


interface MovieParams {
  page?: number
  without_genres?: string,
}

export const useCast = (params: MovieParams) => {

    // const getImages = (id: number, path: string) => useQuery({
    //     queryKey: ["movie-key", params, path],
    //     queryFn: ()=> api.get(`/discover/movie/${id}/${path}`, {params}).then(res => res.data)
    // })

    const getActor = (id?: number, path?: string) => useQuery({
        queryKey: ["movie-key", id, path, params],
        queryFn: ()=> api.get(`/movie/${id}/${path}`, {params}).then(res => res.data)
    })
    


    return {getActor}
}