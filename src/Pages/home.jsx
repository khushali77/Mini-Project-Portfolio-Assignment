import React from "react";
import Profile from "../components/profile";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Blogs from "../components/blogs";
import Footer from "../components/footer";

export const Home = () =>{
    return(
        <div>
            <Profile/>
            <Skills/>
            <Projects/>
            <Blogs/>
            <Footer/>
        </div>
    );
}

