export default function ExpeirenceSection({time, brand, description}: {time: string, brand: string, description: string[]}) {
    return (
        <li className="ml-5 mb-10">
                        <div className="absolute w-4 h-4 bg-primary rounded-full mt-2 -left-2 border border-primary"></div>
                        <h6 className="font-heading p-1 text-2xl">{time}</h6>
                        <h4 className="font-heading p-1 text-3xl">{brand}</h4>
                            <ul className="list-disc font-primary pl-5 py-2">
                                {
                                    description.map(item => {
                                        return <li className="py-1">{item}</li>

                                    })
                                }
                            </ul>
                        {/* <button className="cursor-none px-5 py-1 mt-5 ml-2 hover:bg-primary hover:text-white font-primary rounded-md border-2 border-primary"><a href="" className="cursor-none">Learn More</a></button> */}
        </li>
    )
}