export const getOutput = (command, setCommand) => {
    switch (command.toLowerCase()) {
        case "help":
            return (
                <div>
                    Available commands: <br />
                    <span className="text-green-500 ml-3">about</span> - Learn more about me. <br />
                    <span className="text-green-500 ml-3">skills</span> - I guess, I am good at certain things. <br />
                    <span className="text-green-500 ml-3">projects</span> - Check out the cool stuff I've made. <br />
                    <span className="text-green-500 ml-3">contact</span> - Reach out if I catch your interest. <br />
                    <span className="text-green-500 ml-3">resume</span> - Checkout my Resume. <br />
                    <span className="text-green-500 ml-3">clear</span> - Clear the terminal.
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
                    <span className="text-green-500 ml-3"><a href="https://github.com/mustan-ali" target="_blank" rel="noreferrer">Github</a></span>
                     - Here you can find all my projects and contributions. <br />
                    <span className="text-green-500 ml-3"><a href="https://www.linkedin.com/in/mustan-ali/" target="_blank" rel="noreferrer">LinkedIn</a></span>
                     - Here you can find my professional profile. <br />
                </div>
            )

        case "skills":
            return (
                <div>
                    <span className="text-green-500 ml-3">Languages</span><span>- C, Java, Python, JavaScript </span><br />
                    <span className="text-green-500 ml-3">Front-End</span><span>- HTML, CSS, Bootstrap, React </span><br />
                    <span className="text-green-500 ml-3">Backend/Database</span><span>- RestAPI, SQL, NodeJS, ExpressJS, MongoDB </span>
                </div>
            )

        case "projects":
            return (
                <div>
                    <a className="text-green-500" href="https://github.com/mustan-ali/Workout-Tracker" target="_blank" rel="noreferrer">Workout Tracker </a>
                    - A comprehensive workout tracking application built with the MERN Stack enabling users to log & manage their exercise routines. <br />
                    <a className="text-green-500" href="https://github.com/mustan-ali/NewsWire" target="_blank" rel="noreferrer">NewsWire </a>
                    - The NewsWire app, built using React JS, enables users to view news from a variety of categories through newsapi.org. <br />
                    <a className="text-green-500" href="https://github.com/mustan-ali/TextUtils" target="_blank" rel="noreferrer">TextUtils </a>
                    - A web-based text utility tool built using React JS. It allows users to edit, format, manipulate and convert text. <br />
                    <a className="text-green-500" href="https://github.com/mustan-ali/WiFi-QR-Code-Generator" target="_blank" rel="noreferrer">WiFi QR-Code Generator </a>
                    - A web-based WiFi QR code generator that lets users create QR codes for connecting to a Wi-Fi network. <br />
                    <a className="text-green-500" href="https://github.com/mustan-ali/Tic-Tac-Toe" target="_blank" rel="noreferrer">Tic Tac Toe </a>
                    - A simple Tic Tac Toe game built with React, where two players can take turns to compete. <br />
                    <a className="text-green-500" href="https://github.com/mustan-ali/Quest-Rush" target="_blank" rel="noreferrer">Quest Rush </a>
                    - Software Construction & Development (SCD) Project <br />
                    <a className="text-green-500" href="https://github.com/mustan-ali/Semester-Course-Performance" target="_blank" rel="noreferrer">Semester Course Performance </a>
                    - Database Systems (DBS) Project <br />
                    <a className="text-green-500" href="https://github.com/mustan-ali/Password-Management-System" target="_blank" rel="noreferrer">Password Management System </a>
                    - Data Structures & Algorithms (DSA) Project <br />
                    <a className="text-green-500" href="https://github.com/mustan-ali/Medical-Billing-System" target="_blank" rel="noreferrer">Medical Billing System </a>
                    - Computer Organization and Assembly Language (COAL) Project <br />
                    <a className="text-green-500" href="https://github.com/mustan-ali/Airline-Reservation-System" target="_blank" rel="noreferrer">Airline Reservation System </a>
                    - Object Oriented Programming (OOP) Project <br />
                    <a className="text-green-500" href="https://github.com/mustan-ali/ATM-Software" target="_blank" rel="noreferrer">ATM Software </a>
                    - Fundamental of Programming (FoP) Project <br />
                    <a className="text-green-500" href="https://github.com/mustan-ali/Cash-Register-Software" target="_blank" rel="noreferrer">Cash Register Software </a>
                    - Introduction to Computer Science (ICS) Project <br />
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
