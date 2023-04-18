import React from "react";
import {MdImageSearch} from 'react-icons/md';

export default function SearchBar() {
    return (
        
            <div className="search-bar">
                <form > 
                <div className="search-bar__search-input">
                    <input
                        type="text"
                        name="search-input"
                        id="search-input"
                        className="input-search" 
                        placeholder="What are you looking for? type something"/>
                </div>
                <div className="search-bar__icon">
                 <MdImageSearch />
                </div>
                </form>
            </div>
       
    );
}