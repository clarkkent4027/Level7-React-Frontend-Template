import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../Spinner/Spinner";
import classes from './SearchOutput.module.css';

const SearchOutput = (props) => {
    let message = null;

    if (props.term && props.results.length !== 0) {
        message = <p>Showing {props.results.length} results</p>;
    } else if (props.term) {
        message = <Spinner/>;
    } else if (props.term === null){
        message = "no results found";
    }

    let searchResults = null;
    if (props.results) {
        searchResults =
            props.results.map((result, index) => {
                return (
                    <SearchResult
                        key={index}
                        title={result.title}
                        authors={result.authors}
                        link={result.link}
                    />
                );
            })
    }


    return (
        <div className={classes.ElephantDTO}>
            {message}
            {searchResults}
        </div>
    )
}

export default SearchOutput;
