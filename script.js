document.addEventListener('DOMContentLoaded', () => {
    const terminalContent = document.getElementById('terminal-content');
    const inputField = document.getElementById('command-input');
    const inputBox = document.querySelector('.input-box');


    // Defines commands and their responses
    const commands = {
        help: "Available commands: <strong>about</strong>, <strong>projects</strong>, <strong>contact</strong>, <strong>clear</strong>",
        about: "Hello my name is Carlos, however my online alias is Dunbird. I am an aspiring Cyber Security professional with a passion of Digital Forensics! Here on my interactive portfolio you will find my basic information along with whatever projects I am currently working on. Feel free to reach out if you have any questions!",
        writeups: "Check out my CTF and Lab Writeups on <a href='https://github.com/Dunbird/CTF-Writeups' target='_blank'>Github</a>.",
        contact: 
        `You can reach me via <br>
        Email: notdunbird@gmail.com <br>
        Linkedin:  <a href='https://www.linkedin.com/in/carlos-castaneda-b7a566242/' target='_blank'>LinkedIn</a> <br>
        Discord: dunbird.
        `,
        clear: () => {
            // Clears the terminal content 
            terminalContent.querySelectorAll('p').forEach(p => p.remove());
            return null; 
        }
    };

    // Handle command input and return the appropriate response
    const handleCommand = (command) => {
        if (commands[command]) {
            const response = commands[command];
            // If the command is a function (e.g., clear), execute it
            if (typeof response === 'function') {
                response();
                return null; // Prevent any text output for the "clear" command
            }
            return response; // Return the response for other commands
        }
        // Default message for unknown commands
        return `Command not found: ${command}. Type <strong>help</strong> for a list of commands.`;
    };

    // Create a new line of output in the terminal
    const createOutput = (text) => {
        const output = document.createElement('p');
        output.innerHTML = text;
        return output;
    };

    // Ensure the input box stays at the bottom and auto-scrolls
    const moveInputBox = () => {
        terminalContent.appendChild(inputBox);
        terminalContent.scrollTop = terminalContent.scrollHeight;
    };

    // Event listener for handling command input
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const userCommand = inputField.value.trim();
            if (userCommand) {
                // Display the user's command
                terminalContent.insertBefore(
                    createOutput(`<span class="prompt">User@Portfolio:~$</span> ${userCommand}`),
                    inputBox
                );
                // Get the response for the command
                const response = handleCommand(userCommand);
                if (response) {
                    // Display the response (if any)
                    terminalContent.insertBefore(createOutput(response), inputBox);
                }
            }
            inputField.value = ''; // Clear the input field
            moveInputBox();
            inputField.focus(); // Focus on the input box
        }
    });

    // Initial position of the input box
    moveInputBox();
    inputField.focus(); // Automatically focus on the input box when the page loads
});
