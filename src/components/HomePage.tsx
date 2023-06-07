    import homgepage from '../content/homepage.svg'
    import github from '../content/github.png'
    import likedin from '../content/linkedin.png'
    import githubDark from '../content/github (1).png'
    import linkedinDark from '../content/linkedin-logo (1).png'


import { useState } from 'react'

        function HomePage() {

            const [githubLink, setGithubLink] = useState(github) 
            const [linkedinLink, setLinkedinLink] = useState(likedin)
            return (
            <div className="flex flex-wrap mb-10">
                <div className='flex-none text-center w-6/12 mx-auto'>
                <h1 className="text-7xl py-10 font-heading">
                    Hi, I Am <br/> Sunny Wahane
                </h1>
                <h2 className="text-4xl pb-5 font-heading">
                    SOFTWARE DEVELOPER
                </h2>
                <div className='pb-5 pt-4'>
                <a href="https://github.com/sunny-wahane"><img src={githubLink} alt="" className='cursor-none w-8 inline mr-2'
                onMouseOver={() => setGithubLink(githubDark)}
                onMouseOut={() => setGithubLink(github)}/></a>
                <a href="https://www.linkedin.com/in/sunny-wahane/"> <img src={linkedinLink} alt="" className='cursor-none w-8 inline'
                     onMouseOver={() => setLinkedinLink(linkedinDark)}
                     onMouseOut={() => setLinkedinLink(likedin)}/></a>
                   
                </div>
               

                <div className="text-lg pb-5 pt-4 font-text">
                    <p className='pr-2'>
                    I am a software developer based in India <br />
                    Mostly working as backend dev. <br />
                    Connect with me if you want to work on something interesting.
                    </p>
                </div>
                <button className="cursor-none rounded-full hover:bg-primary hover:text-white px-6 py-1 my-10 font-text border border-primary">
                    Resume
                </button>
                </div>
                <div className='flex-1 min-w-fit w-6/12'>
                <img src={homgepage} alt='typing hands' className='min-w-fit w-6/12'/>
                </div>
            </div>
            )
        } 

        export default HomePage; 