import ProjectCard from "./ProjectCard";

export default function Projects() {
    const description: string[] =
    ["A weather app that shows current weather, next 24 hours and next weeks forecast of the location provided by the user.",
         "Used Openweather Api to retrieve the information of the weather.",
         "Used Html, CSS and Bootstrap in the frontend and Javascript for making Api calls to openweather apis."] ;
    return (
      <div>
        <h2 className="font-heading text-5xl ml-20 pl-10 pt-10 pb-4">02. Projects </h2>
        <div className="flex flex-wrap mr-20 ml-8">
         <ProjectCard name="Your Weather" 
         description = {description}
         link=""
         repo=""
         image=""
         />
           <ProjectCard name="Your Weather" 
         description = {description}
         link=""
         repo=""
         image=""
         />
          <ProjectCard name="Your Weather" 
         description = {description}
         link=""
         repo=""
         image=""
         />
          <ProjectCard name="Your Weather" 
         description = {description}
         link=""
         repo=""
         image=""
         />
        </div>
        </div>
    )
}