import ProjectCard from "./ProjectCard";
import weather from "../content/weather.png"
import sketch from "../content/sketch.png"
import quote from "../content/quote.png"
import waldo from "../content/waldo.png"
import blogs from "../content/blogs.png"

export default function Projects() {
    const description: string[] =[]
    // ["A weather app that shows current weather, next 24 hours and next weeks forecast of the location provided by the user.",
    //      "Used Openweather Api to retrieve the information of the weather.",
    //      "Used Html, CSS and Bootstrap in the frontend and Javascript for making Api calls to openweather apis."] ;
    return (
      <div className="mt-10 mb-20">
        <h2 className="font-heading text-5xl ml-20 pl-10 pt-10 pb-4 ">02. Projects </h2>
        <div className="flex flex-wrap mr-20 ml-8">
        <ProjectCard name="Etch a Sketch" 
         description = {description}
         link="https://sunny-wahane.github.io/ETCH-A-SKETCH/"
         repo="https://github.com/sunny-wahane/ETCH-A-SKETCH"
         image={sketch}
         />
        <ProjectCard name="Your Blogs" 
         description = {description}
         link="https://web-production-ca0a.up.railway.app/"
         repo="https://github.com/sunny-wahane/blog"
         image={blogs}
         />
         <ProjectCard name="Where is Waldo ?" 
         description = {description}
         link="https://web-production-3899.up.railway.app/"
         repo="https://github.com/sunny-wahane/photo-taging-game"
         image={waldo}
         />
          <ProjectCard name="Your Weather" 
         description = {description}
         link="https://sunny-wahane.github.io/app-weather/"
         repo="https://github.com/sunny-wahane/app-weather"
         image={weather}
         />
          <ProjectCard name="Advice Slip" 
         description = {description}
         link="https://63529becda9e0a045f022bc5--wondrous-souffle-bba908.netlify.app/"
         repo="https://github.com/sunny-wahane/Advice-slip?tab=readme-ov-file"
         image={quote}
         />
           {/* <ProjectCard name="Your Weather" 
         description = {description}
         link=""
         repo=""
         image={weather}
         />  <ProjectCard name="Your Weather" 
         description = {description}
         link=""
         repo=""
         image={weather}
         /> */}
        </div>
        </div>
    )
}