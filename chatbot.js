function sendMessage() {
    const input = document.getElementById("user-input");
    const messages = document.getElementById("messages");
    const userText = input.value.trim();

    if (userText === "") return;

    // Show user's message
    const userMessage = document.createElement("div");
    userMessage.className = "user";
    userMessage.textContent = userText;
    messages.appendChild(userMessage);

    // Get bot response
    const botReply = getBotResponse(userText);

    const botMessage = document.createElement("div");
    botMessage.className = "bot";
    botMessage.textContent = botReply;
    messages.appendChild(botMessage);

    // Clear input field
    input.value = "";

    // Auto scroll to bottom
    messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();

    // Simple keyword matching
    if (input.includes("hello") || input.includes("hi")) {
        return "Hey there! 👋 How can I help you today?";
    } else if (input.includes("who are you")) {
        return "I'm ToonBot, your friendly assistant from Toonware Productions!";
    } else if (input.includes("games")) {
        return "We’ve got games coming soon! Stay tuned 🎮";
    } else if (input.includes("art")) {
        return "Our art studio is a space for creativity! Want to see the gallery?";
    } else if (input.includes("bye")) {
        return "See ya later! Thanks for visiting Toonware!";
    } else {
        return "Hmm, I’m not sure how to respond to that yet. Try asking about games or art!";
    }
}
