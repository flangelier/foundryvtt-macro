async function rollIndividualC17more()
{    
    let r = new Roll("1d100").roll();
    let resultd100 = r.result;
    console.log(`ITC17more Rolled: ${resultd100}`);   
    let messages = [];
    
    if (resultd100 <= 15) {  
        r = new Roll("10000d6").roll();
        messages.push(`${r.result} silver pieces`);
        r = new Roll("800d6").roll();
        messages.push(`${r.result} gold pieces`);
    }
    else if (resultd100 <= 55) {
        r = new Roll("1000d6").roll();
        messages.push(`${r.result} gold pieces`);
        r = new Roll("100d6").roll();
        messages.push(`${r.result} platinum pieces`);
    }
    else if (resultd100 <= 100) {
        r = new Roll("1000d6").roll();
        messages.push(`${r.result} gold pieces`);
        r = new Roll("200d6").roll();
        messages.push(`${r.result} platinum pieces`);
    }
    else {
        messages.push("Out of range...");
    }
    
    ChatMessage.create({content: messages.join("<br />"), whisper: ChatMessage.getWhisperRecipients("GM")});
}

rollIndividualC17more()