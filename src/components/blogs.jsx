import {BlogList} from "../portfolioData"

export const Blog = (props) =>{
   return( 
    <div className="blogslinks">
        <li><a href={props.data.link} rel="noreferrer" target="_blank">{props.data.name}</a></li>
    </div>
    );
}

function Blogs(){
    return(
        <div className="blogs">
            <h6>Blogs</h6>
            {BlogList.map(item=>(<Blog data={item}/>))}
        </div>
    );
}

export default Blogs;