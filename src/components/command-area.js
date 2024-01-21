import React, { useState } from "react"
import { getOutput } from "./commands"

export default function Command() {
    const [command, setCommand] = useState([])
    const [currentCommand, setCurrentCommand] = useState("")

    const lastCommand = command.length > 0 ? command[command.length - 1] : null

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            setCommand((prevCommand) => [
                ...prevCommand,
                {
                    command: currentCommand.toLowerCase(),
                    output: getOutput(currentCommand, setCommand),
                },
            ])
            setCurrentCommand("")
        }
    }

    return (
        <div>
            {lastCommand && (
                <div>
                    <div className="flex flex-row mb-0.5">
                        <div className="text-lime-500 font-bold ml-10">
                            visitor@mustan~$
                        </div>
                        <div className="ml-2 font-mono text-slate-300">
                            {lastCommand.command}
                        </div>
                    </div>
                    <div className="font-mono text-left ml-16 mb-3 mr-10" id="output-content">
                        {lastCommand.output}
                    </div>
                </div>
            )}

            <div className="flex flex-row">
                <div className="text-lime-500 font-bold ml-10">
                    visitor@mustan~$
                </div>
                <input
                    className="bg-transparent outline-none border-none font-mono ml-2 text-slate-300 w-2/3"
                    type="text"
                    value={currentCommand}
                    autoFocus={true}
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyDown={handleEnterKey}
                />
            </div>
        </div>
    )
}