import { useState, useEffect } from 'react';
import { movieAPI } from '../services/api'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'

function Home() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [hasNext, setHasNext] = useState(false)
    const [hasPrevious, setHasPrevious] = useState(false)

    useEffect(() => {
        fetchMovies(searchQuery, currentPage)
    }, [searchQuery, currentPage])

    const fetchMovies = async (query, page = 1) => {
        try {
            setLoading(true)
            setError(null)
            const data = await movieAPI.getMovies(query, page)

                if (data.results) {
                    setMovies(data.results)
                    setHasNext(!!data.next)
                    setHasPrevious(!!data.previous)

                    if (data.count) {
                        const pageSize = 100
                        setTotalPages(Math.ceil(data.count / pageSize))
                    }
                } else {
                    setMovies(data)
                    setHasNext(false)
                    setHasPrevious(false)
                    setTotalPages(1)
                }
            } catch (err) {
                setError('Failed to fetch movies. Please try later.')
                console.error('Error fetching movies:', err)
            } finally {
                setLoading(false)
            }
    }

    const handleSearch = (query) => {
        setSearchQuery(query)
        setCurrentPage(1)
    }

    const handleNextPage = () => {
        if (hasNext) {
            setCurrentPage(prev => prev + 1)
            window.scrollTo({ top: 0, behavior: 'smooth '})
        }
    }

        const handlePreviousPage = () => {
        if (hasPrevious) {
            setCurrentPage(prev => prev - 1)
            window.scrollTo({ top: 0, behavior: 'smooth '})
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-2xl text-white">Loading movies...</div>
            </div>
        )
    }

    if (error) {
        return(
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-2xl text-red-500">{error}</div>
            </div>
        )
    }

    return (
        <div className='pt-20 px-4 md:px-12 pb-12'>
            <div className='mb-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-white mb-8 text-center'>
                    Discover Movies
                </h1>
                <SearchBar onSearch={handleSearch} />
            </div>

            {movies.length === 0 ? (
                <div className='text-center text-white text-xl mt-12'>
                    No movies found. Try different search.
                </div>
            ) : (
                <>
                    <div className='grid grid-cols-2 sm:grid-2 lg:grid-cols-4 gap-6'>
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>

                    {/* Pagination Controls */}
                </>
            )}
        </div>
    )


}

export default Home
