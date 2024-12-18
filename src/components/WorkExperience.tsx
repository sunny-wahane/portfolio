import ExpeirenceSection from "./ExpereinceSection"

export default function WorkExperience() {

    const zetIIDescription: string[] = [
        "Developed “Credit Guru” AI chatbot on Zet: Leveraged AWS Bedrock for LLM hosting and integrated LangChain to build an efficient AI agent, enhancing user experience in understanding credit reports, and implemented Retrieval-Augmented Generation (RAG) for contextual understanding of offerings and company data.",
        "Integrated tools to process credit reports, provided personalized improvement suggestions, created prompts for LLM responses, and used markup languages for formatting links, deep links, and images.",
        "Developed and implemented the Delivery tracking feature for Magnet Card, enhancing logistics transparency.",
        "Led the development of the 'Raise a Complaint' feature, enabling ticket creation through a rule-based chatbot. Integrated Freshdesk APIs and used webhooks to update a dedicated ticket status section within the app.",
        "Utilized an in-house state machine framework to enhance modularity and efficiency, managed a team of two developers, resulting in a 32% increase in in-app ticket volume (from 45% to 77%) and reducing conversations per ticket from 2.3 to 1.4.",
        "Integrated Exotel APIs for seamless calling between relationship managers and agents, and designed additional APIs to enable monitoring of agent performance over a six-month period.",
        "Led Magnet Rewards Integration: Designed and implemented a rewards system to incentivize user activity, integrating Cashfree for payments and partnering with Poshvine for coupons, enriching user engagement on the app"
    ]

    const zetDescription: string[] = [
        "Led the initiative to build a CRM system for the customer support team and created a GraphQL service to support its functionality.",
        "Integrated Freshdesk into the CRM for efficient ticket management.",
        "Managed the Training Management Service, adding new APIs and functionality, and implemented Zoom webhooks for real-time webinar tracking.",
        "Migrated the training service from MongoDB to MySQL and optimized the service layer for improved performance.",
        "Enhanced the Loyalty program by implementing cron jobs for user tier adjustments and listeners to automate user rewards, and contributed to the rebranding of OneCode to Zet Partner by developing supporting APIs.",
        "Technologies: Java, Spring Boot, MySQL, MongoDB, AWS Lambda, SQS, Redis, Apache Kafka, JUnit, MyBatis, GraphQL, Websockets, Langchain, AWS Bedrock, Python."
    ]

    const medlyDescription: string[] = [
        "Integrated Braze into the Communication Platform, documenting features such as Multichannel-Campaigns, Canvas, and API Campaigns.",
        "Developed user engagement for Medly by implementing messaging through push notifications, SMS, and emails on the Communication Platform.",
        "Utilized AWS Kinesis to emit events from the communication service to other services.",
        "Created API endpoints to store user communication preferences from various B2C apps.",
        "Technologies: Kotlin, Micronaut, Kotest, Mockk, PostgreSQL, AWS."
    ]

    const infineonDescription: string[] = [
        "Enabled Model-Based System Engineering at Infineon: Collaborated with cross-functional teams to integrate Enterprise Architect with Jama for seamless data synchronization.",
        "Developed an Enterprise Architect plugin to sync diagrams and elements with Jama via REST APIs, improving efficiency.",
        "Created a parser to export project structures from Enterprise Architect to JSON, streamlining data portability.",
        "Built middleware APIs for seamless data flow between Enterprise Architect and Jama, with YAML mapping for element types.",
        "Integrated Jama APIs for secure authentication and automated project data retrieval.",
        "Technologies: C#, Python, Flask, NLog, NUnit, SQLite."
    ]


    return (
        <div>
            <h2 className="font-heading text-5xl ml-20 pl-10 pb-16">01. Expeirence </h2>
            <div className="relative border-l pl-5 border-primary w-9/12 mx-auto">
                <ol>
                    <ExpeirenceSection time = "Novemeber 2023 - Present" brand ="Senior Software Engineer, ZET" description={zetIIDescription}/>
                    <ExpeirenceSection time = "December 2022 - November 2023" brand ="Software Engineer, ZET" description={zetDescription}/>
                    <ExpeirenceSection time = "May 2022 - December 2022" brand="Associate Software Engineer, Medly" description={medlyDescription}/>
                    <ExpeirenceSection time = "June 2021 - April 2022" brand="Intern, Infineon" description={infineonDescription}/>
                </ol>
            </div>
            </div>
        )
}