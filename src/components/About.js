import React from "react";
import Links from './Links'
import user from '../data/user'

function About(props) {

  function Bio(props) {
    const bio = props.bio;
    if(bio) {
      return <p>{props.bio}</p>;
    }
    else{
    return null;
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links githubLink={user.links.github} linkedinLink={user.links.linkedin}/>
    </div>
  );
}

export default About;
