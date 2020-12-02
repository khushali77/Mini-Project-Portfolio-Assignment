import React from "react";
import {Data} from "../portfolioData";

function Profile(){
    return (
        <div className="profile">
            <img className="profilephoto" src={Data.img} alt={Data.alt}/>
            <h4 className="profilename">{Data.name}</h4>
            <h6 className="profilecollege">{Data.college}</h6>
            <h6 className="profiledesc">{Data.desc}</h6>
        </div>
    );
}

export default Profile;