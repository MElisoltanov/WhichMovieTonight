import { useState } from 'react';

// SearchBar component allows users to input a search query and submit it to filter the displayed items.
function SearchBar({ onSearch }) {

    // State to hold the current search query input by the user.
    const [query, setQuery] = useState('')

    // Handler for form submission. Prevents the default form submission behavior and calls the onSearch prop with the current query.
    const handleSubmit = (formEvent) => {
        formEvent.preventDefault()
        onSearch(query)
    }

    // Handler to clear the search input and reset the search results by calling onSearch with an empty string.
    const handleClear = () => {
        setQuery('')
        onSearch('')
    }

    return (
        <div className="w-full max-w-2xl mx-auto mb-8">
            <form onSubmit={handleSubmit} className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(formEvent) => setQuery(formEvent.target.value)}
                    placeholder="Search movies by title, genre, or cast..."
                    className="w-full px-6 py-4 text-lg bg-gray-800 text-white rounded-lg border-2 border-gray-700 focus:border-netflix-red focus:outline-none transition"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
                        {query && (
                            <button
                                type="button"
                                onClick={handleClear}
                                className="px-4 py-2 text-gray-400 hover:text-white transition"
                                >
                                    Clear
                                </button>
                        )}
                        <button
                            type="submit"
                            className="px-6 py-2 bg-netflix-red text-white rounded-lg hover:bg-red-700 transition"
                            >
                                Search
                            </button>
                    </div>
            </form>
        </div>
    )
}

export default SearchBar;
