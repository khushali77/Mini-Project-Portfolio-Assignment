import React from "react";
import {Data} from "../portfolioData";

function Skills(){
    return(
        <div className="skills">
            <h6>My Top 4 Skills</h6>
            <img className="skill1" src={Data.skill1} alt={Data.alt}/>
            <img className="skill2" src={Data.skill2} alt={Data.alt}/>
            <img className="skill3" src={Data.skill3} alt={Data.alt}/>
            <img className="skill4" src={Data.skill4} alt={Data.alt}/>
        </div>
    );
}

export default Skills;
