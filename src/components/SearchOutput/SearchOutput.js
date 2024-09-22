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
            props.results.get(0).getMeanings().get(0).getDefinitions() => {
                return (
                    <SearchResult
                        key={index}
                        word={ElephantDTO.word}
                        phonetic={ElephantDTO.phonetic}
                        phonetics={ElephantDTO.phonetics}
                        meanings={ElephantDTO.meanings}
                        sourceUrls={ElephantDTO.sourceUrls}
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
