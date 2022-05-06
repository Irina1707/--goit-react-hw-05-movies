 import { useState } from "react";
 import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

export default function MoviesPage({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleNameChange = event => {
        setSearchQuery(event.currentTarget.value.toLowerCase());
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
            toast.warn("Please, enter something in the search box.")
            return;
        }
        onSubmit(searchQuery);
        setSearchQuery('');

    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={searchQuery}
                    onChange={handleNameChange} />
                <button>Search</button>
                </form>
        </div>
        
    )
}