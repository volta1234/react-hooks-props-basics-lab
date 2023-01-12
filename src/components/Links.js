import React from "react";
import About from "./About";

function Links(props) {
    return(
        <>
        <h3>Links</h3>
        <a href={props.githubLink}>{props.githubLink}</a>
        <a href={props.linkedinLink}>{props.linkedinLink}</a>
        </>
    )
}

export default Links;