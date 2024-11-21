document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('terminal-content');
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
                contentDiv.innerHTML = '';
                return;
            }
            return commands[command];
        } else {
            return `Command not found: ${command}. Type <strong>help</strong> for a list of commands.`;
        }
    };

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const userCommand = inputField.value.trim();
            const response = handleCommand(userCommand);
            contentDiv.innerHTML += `<p><span class="prompt">User@Portfolio:~$</span> ${userCommand}</p>`;
            if (response) {
                contentDiv.innerHTML += `<p>${response}</p>`;
            }
            inputField.value = '';
            contentDiv.scrollTop = contentDiv.scrollHeight; // Auto-scroll to bottom
        }
    });
});
