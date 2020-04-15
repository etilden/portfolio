import React from 'react'; 
import {MdRssFeed} from 'react-icons/md'
import {GoMarkGithub} from 'react-icons/go'
import {FaYoutube} from 'react-icons/fa'
import './project.css'

function Project(props) {
  return (
    <div className="box">
      <img src={props.project.image} alt="screencap"/> 
      <h2>{props.project.name}</h2>
      <p>{props.project.description}</p>
      <div> 
        <a href={props.project.github}><GoMarkGithub /></a>
        {!props.project.deploy ? null : <a href={props.project.deploy}><MdRssFeed /></a>}  
        {!props.project.video ? null: <a href={props.project.video}><FaYoutube /></a>}
      </div>
    </div>
  )
};

export default Project