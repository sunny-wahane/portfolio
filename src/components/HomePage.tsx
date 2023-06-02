    import homgepage from '../content/homepage.svg'

        function HomePage() {
            return (
            <div className="pl-20 flex flex-wrap">
                <div className='flex-none'>
                <h1 className="text-7xl py-10 font-oswald">
                    SUNNY WAHANE
                </h1>
                <h2 className="text-4xl pb-10 font-oswald">
                    SOFTWARE DEVELOPER
                </h2>
                <div className="text-lg pb-10 font-antic">
                    <p>
                    I am a software developer based in India <br />
                    Mostly working as backend dev. <br />
                    Connect with me if you want to work on something interesting.
                    </p>
                </div>
                <button className="rounded-full bg-turtle-green px-6 py-1 my-10 font-oswal hover:scale-110">
                    Resume
                </button>
                </div>
                <div className='flex-1'>
                <img src={homgepage} alt='typing hands' />
                </div>
                {/* <a href="https://storyset.com/work">Work illustrations by Storyset</a> */}
            </div>
            )
        } 

        export default HomePage; 