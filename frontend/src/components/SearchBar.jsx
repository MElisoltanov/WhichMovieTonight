import { useState } from 'react';

function SearchBar({ onSearch }) {

    const [query, setQuery] = useState('')

    const handleSubmit = (formEvent) => {
        formEvent.preventDefault()
        onSearch(query)
    }

    const handleClear = () => {
        setQuery('')
        onSearch('')
    }

}

export default SearchBar;
