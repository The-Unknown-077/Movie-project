import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

api.interceptors.request.use((config) => {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzcxNTU2ZDI4MDIwNzIxZmFiMzA1ZDY3YmVmYmM5NyIsIm5iZiI6MTc1NTE2OTQwOC44NjQsInN1YiI6IjY4OWRjMjgwNjhjMzc2MTVjM2M3MDhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7nXejeVb6ZyUAm9w2SJIZhOgs5y0j8RmoDeSjDGC7c"

    config.headers.Authorization = `Bearer ${token}`

    return config
})