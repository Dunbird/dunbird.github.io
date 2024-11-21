document.addEventListener('DOMContentLoaded', () => {
    const terminalContent = document.getElementById('terminal-content');
    const inputField = document.getElementById('command-input');
    const inputBox = document.querySelector('.input-box');

    const commands = {
        help: "Available commands: <strong>about</strong>, <strong>projects</strong>, <strong>contact</strong>, <strong>clear</strong>",
        about: "I am an aspiring cybersecurity specialist with a passion for digital forensics.",
        writeups: "Check out my writeups on <a href='https://github.com/Dunbird/CTF-Writeups' target='_blank'>GitHub</a>.",
        contact: "You can reach me via email: notdunbird@gmail.com",
        clear: () => {
            const content = terminalContent.querySelectorAll('p');
            content.forEach(p => {
                p.remove();
            });
            return null
        }
    };

    const handleCommand = (command) => {
        if (commands[command]) {
            return commands[command]();
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
        terminalContent.appendChild(inputBox);
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
            inputField.focus();
        }
    });

    moveInputBox();
    inputBox.focus();
});
