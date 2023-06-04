import githubLogo from '../content/github-mark-white.svg';
import githubLogoActive from '../content/github-green.svg';

export default function ProjectCard({name, description, link, repo, image}: {
    name: string, 
    description: string[], 
    link: string, 
    repo: string,
    image: string
}) {
    return (
        <div className='flex-1 mt-10 ml-10 p-10 border border-lg border-primary basis-1/4'>
            <img src={image} alt="" />
            <h3 className='font-heading py-3'>{name}</h3>
            <ul className='list-disc'>
                {
                    description.map(item => {
                        return (
                            <li className='font-text my-1'>{item}</li>
                        )
                    })
                }
            </ul>
            <div className='text-center content-center'>
            <a href={link}><button className='px-5 py-1 mt-5 mx-5 hover:bg-primary   font-primary rounded-md border-2 border-primary'>Live</button></a>
            <a href={link}><button className='px-5 py-1 mt-5 mx-5 hover:bg-primary   font-primary rounded-md border-2 border-primary'>Github</button></a>
            </div>
        </div>
    )
}