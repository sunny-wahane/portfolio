    import homgepage from '../content/homepage.svg'

        function HomePage() {
            return (
            <div className="flex flex-wrap">
                <div className='flex-none text-center w-5/12 mx-auto'>
                <h1 className="text-7xl py-10 font-heading">
                    Hi, I Am <br/> Sunny Wahane
                </h1>
                <h2 className="text-4xl pb-10 font-heading">
                    SOFTWARE DEVELOPER
                </h2>
                <div className="text-lg pb-10 font-text">
                    <p className='pr-2'>
                    I am a software developer based in India <br />
                    Mostly working as backend dev. <br />
                    Connect with me if you want to work on something interesting.
                    </p>
                </div>
                <button className="rounded-full hover:bg-primary px-6 py-1 my-10 font-text border border-primary">
                    Resume
                </button>
                </div>
                <div className='flex-1 min-w-fit w-1/2'>
                <img src={homgepage} alt='typing hands' className='min-w-fit w-1/2'/>
                </div>
            </div>
            )
        } 

        export default HomePage; 