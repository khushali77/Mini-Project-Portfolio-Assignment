import React from "react";
import {Data} from "../portfolioData";

export const Home = () =>{
    return(
        <div className="profile">
        <img className="profilephoto" src={Data.img} alt={Data.alt}/>
        <h4 className="profilename">{Data.name}</h4>
        <h6 className="profilecollege">{Data.college}</h6>
        <h6 className="pofiledesc">{Data.desc}</h6>
        </div>
    );
}


export const About = () =>{
    return(
        <div>
            <p>This is the About page</p>
        </div>
    );
}

export const Contact = () =>{
    return(
        <div>
            <p>This is the Contact page</p>
        </div>
    );
}