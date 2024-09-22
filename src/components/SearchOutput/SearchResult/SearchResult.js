import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.ElephantDTO}>
            <h1>Title: {props.word}</h1>
            <h3 className={classes.Meaning}>
                {props.meaning && props.meaning.map((meaning, index) => (
                    <p key={index}>{meaning}</p>
                ))}
            </h3>
            <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
        </article>
    );
}

export default SearchResult;
