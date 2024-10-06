import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log("props",props);
    return (
        <article className={classes.ElephantDTO}>
            <h1>Definition: </h1>
           <p><b>{props.definition}</b></p>
           <p>{props.example}</p>
            <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
        </article>
    );
}

export default SearchResult;
