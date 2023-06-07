import ExpeirenceSection from "./ExpereinceSection"

export default function WorkExperience() {

    const zetDescription: string[] = [
        "As an engineer, I am working on Communication Platform to set up user engagement for medly by enabling messaging through push notifications, SMS, and emails",
        "Worked on integrating Braze into Communication platform.",
        "Documented different features of Braze such as Multichannel-Campaigns, Canvas, API Campaigns etc. Worked on AWS Kinesis for emitting event from communication service for other services.",
        "Created API endpoints to store user communication preferences coming from different B2C apps."
    ]

    const infineonDescription: string[] = [
        "As an Intern I am working in collaboration with different teams to Enable Model Based System Engineering at Infineon",
        "Built a Plugin in Enterprise architect to Upload Diagrams and Elements such as Requirements, Use Case Analysis, Block Definition, Activity etc. from Enterprise architect to Jama through REST API",
        "Created Wrappers around Jama APIs.",
        "Created Rest Api and routes in their in house framework to Upload the Data coming from the plugin through the wrapper functions."
    ]


    return (
        <div>
            <h2 className="font-heading text-5xl ml-20 pl-10 pb-16">01. Expeirence </h2>
            <div className="relative border-l pl-5 border-primary w-9/12 mx-auto">
                <ol>
                    <ExpeirenceSection time = "December 2022 - Present" brand ="ZET" description={zetDescription}/>
                    <ExpeirenceSection time = "May 2022 - December 2022" brand="Medly" description={infineonDescription}/>
                    <ExpeirenceSection time = "June 2021 - April 2022" brand="Infineon" description={infineonDescription}/>
                </ol>
            </div>
            </div>
        )
}