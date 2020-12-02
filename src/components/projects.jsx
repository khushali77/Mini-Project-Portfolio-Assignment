import React from "react";
import {ProjectList} from "../portfolioData"

export const Project = (props) =>{
   return( 
    <div className="projectlinks">
        <li><a href={props.data.link} rel="noreferrer" target="_blank">{props.data.name}</a></li>
    </div>
    );
}

function Projects(){
    return(
        <div className="projects">
            <h6>Projects</h6>
            {ProjectList.map(item=>(<Project data={item}/>))}
        </div>
    );
}

export default Projects;
