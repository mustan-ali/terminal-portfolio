import React from "react"


export default function Header() {
    return (
        <div>

            <pre className="text-left text-lime-500 font-bold mb-2 drop-shadow-xl">
                {`
    __    __          _
    |  \\/  |_   _ ___| |_ __ _ _ __
    | |\\/| | | | / __| __/ _\` | '_ \\
    | |  | | |_| \\__ \\ || (_| | | | |
    |_|  |_|\\__,_|___/\\__\\__,_|_| |_|
                    
            `}
            </pre>

            <div className="font-mono text-left ml-10 mb-5 text-slate-300">
                Welcome to my portfolio!<br />
                Type <span className="text-green-500">help</span> to get a list of available commands.<br />
            </div>
        </div>
    )
}