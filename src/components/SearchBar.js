import React from "react";

export default function SearchBar() {
    return (
        <form >
            <div className="serach-container">
                <div className="search-input">
                    <input
                        type="text"
                        name="search-input"
                        id="search-input"
                        className="input-search" />
                </div>
                <div className="icon">

                </div>

            </div>
        </form>
    );

}