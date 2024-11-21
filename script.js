document.addEventListener('DOMContentLoaded', () => {
    const terminalContent = document.getElementById('terminal-content');
    const inputField = document.getElementById('command-input');

    const commands = {
        help: "Available commands: <strong>about</strong>, <strong>projects</strong>, <strong>contact</strong>, <strong>clear</strong>",
        about: "I am an aspiring cybersecurity specialist with a passion for digital forensics.",
        writeups: "Check out my writeups on <a href='https://github.com/Dunbird/CTF-Writeups' target='_blank'>GitHub</a>.",
        contact: "You can reach me via email: notdunbird@gmail.com",
        clear: "clear"
    };

    const handleCommand = (command) => {
        if (commands[command]) {
            if (command === 'clear') {
                terminalContent.innerHTML = '';
                return null;
            }
            return commands[command];
        } else {
            return `Command not found: ${command}. Type <strong>help</strong> for a list of commands.`;
        }
    };

    const createOutput = (text) => {
        const output = document.createElement('p');
        output.innerHTML = text;
        return output;
    };

    const moveInputBox = () => {
        terminalContent.appendChild(document.querySelector('.input-box'));
        terminalContent.scrollTop = terminalContent.scrollHeight;
    };

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const userCommand = inputField.value.trim();
            if (userCommand) {
                terminalContent.insertBefore(createOutput(`<span class="prompt">User@Portfolio:~$</span> ${userCommand}`), document.querySelector('.input-box'));
                const response = handleCommand(userCommand);
                if (response) {
                    terminalContent.insertBefore(createOutput(response), document.querySelector('.input-box'));
                }
            }
            inputField.value = '';
            moveInputBox();
        }
    });

    moveInputBox();
});
