import React, { useState } from "react";
import "./SearchBar.css"
import 'bootstrap/dist/css/bootstrap.css';

const SearchBar=(props) => {
    const
    [searchTerm, setSearchTerm] = useState("")
    const handleSubmit= (event)=> {
        event.preventDefault();
        props.getVideoList(searchTerm.searchTerm)
    }

    const handleChange= (event)=> {
        setSearchTerm(()=>({
            [event.target.name]:event.target.value
        }))
    } 
    return (
        <div class="searchBarParent">
            <div class="searchField">
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <form onSubmit={(event) => handleSubmit(event)} class= "d-flex">
                            <input name="searchTerm" id="searchFor" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => handleChange(event)}/>
                        <button type="submit" class="searchButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg></button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default SearchBar;