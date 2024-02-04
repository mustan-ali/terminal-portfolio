import data from './Data.json'

export const getOutput = (command, setCommand) => {
    switch (command.toLowerCase()) {
        case "help":
            return (
                <div>
                    {data.help.map((item, index) => (
                        <div key={index}>
                            <span className="text-green-500 ml-3">{item.label}</span> - {item.content} <br />
                        </div>
                    ))}
                </div>
            )

        case "about":
            return (
                <div>
                    I am <span className="text-green-500 font-bold">Mustan Ali</span>, a 3rd year undergraduate student at <span className="text-green-500"> <a href=" ">SZABIST</a> </span> pursuing <span className="text-green-500">Bachelor of Computer Science</span>.
                </div>
            )

        case "contact":
            return (
                <div>
                    {data.contact.map((item, index) => (
                        <div key={index}>
                            <span className="text-green-500 ml-3"><a href={item.link} target="_blank" rel="noreferrer">{item.label}</a></span> - {item.content} <br />
                        </div>
                    ))}
                </div>
            )

        case "skills":
            return (
                <div>
                    {data.skills.map((item, index) => (
                        <div key={index}>
                            <span className="text-green-500 ml-3">{item.label}:</span><span> - {item.content}</span><br />
                        </div>
                    ))}
                </div>
            )

        case "projects":
            return (
                <div>
                    {data.projects.map((item, index) => (
                        <div key={index}>
                            <a className="text-green-500" href={item.link} target="_blank" rel="noreferrer">{item.label} </a> - {item.content} <br />
                        </div>
                    ))}
                </div>
            )

        case "resume":
            window.open("#", "_blank")
            return "Heading to resume..."

        case "clear":
            setCommand([])
            return ""

        default:
            return (
                <div>
                    <span className="text-red-500">Command not found. </span> <br />
                    Type <span className="text-green-500">help</span> to get a list of available commands.
                </div>
            )
    }
}
