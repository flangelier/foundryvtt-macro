async function rollIndividualC11_16()
{    
    let r = new Roll("1d100").roll();
    let resultd100 = r.result;
    console.log(`ITC11_16 Rolled: ${resultd100}`);   
    let messages = [];
    
    if (resultd100 <= 20) {  
        r = new Roll("400d6").roll();
        messages.push(`${r.result} silver pieces`);
        r = new Roll("100d6").roll();
        messages.push(`${r.result} gold pieces`);
    }
    else if (resultd100 <= 35) {
        r = new Roll("500d6").roll();
        messages.push(`${r.result} silver pieces`);
        r = new Roll("100d6").roll();
        messages.push(`${r.result} gold pieces`);
    }
    else if (resultd100 <= 75) {
        r = new Roll("200d6").roll();
        messages.push(`${r.result} gold pieces`);
        r = new Roll("10d6").roll();
        messages.push(`${r.result} platinum pieces`);
    }
    else if (resultd100 <= 100) {
        r = new Roll("200d6").roll();
        messages.push(`${r.result} gold pieces`);
        r = new Roll("20d6").roll();
        messages.push(`${r.result} platinum pieces`);
    }
    else {
        messages.push("Out of range...");
    }
    
    ChatMessage.create({content: messages.join("<br />"), whisper: ChatMessage.getWhisperRecipients("GM")});
}

rollIndividualC11_16()