async function rollIndividualC5_10()
{    
    let r = new Roll("1d100").roll();
    let resultd100 = r.result;
    console.log(`ITC5_10 Rolled: ${resultd100}`);   
    let messages = [];
    
    if (resultd100 <= 30) {        
        r = new Roll("400d6").roll();
        messages.push(`${r.result} copper pieces`);        
        r = new Roll("50d6").roll();
        messages.push(`${r.result} silver pieces`);
    }
    else if (resultd100 <= 60) {  
        r = new Roll("60d6").roll();
        messages.push(`${r.result} silver pieces`);
        r = new Roll("20d6").roll();
        messages.push(`${r.result} gold pieces`);
    }
    else if (resultd100 <= 70) {
        r = new Roll("150d6").roll();
        messages.push(`${r.result} silver pieces`);
        r = new Roll("20d6").roll();
        messages.push(`${r.result} gold pieces`);
    }
    else if (resultd100 <= 95) {
        r = new Roll("40d6").roll();
        messages.push(`${r.result} gold pieces`);
    }
    else if (resultd100 <= 100) {
        r = new Roll("20d6").roll();
        messages.push(`${r.result} gold pieces`);
        r = new Roll("3d6").roll();
        messages.push(`${r.result} platinum pieces`);
    }
    else {
        messages.push("Out of range...");
    }
    
    ChatMessage.create({content: messages.join("<br />"), whisper: ChatMessage.getWhisperRecipients("GM")});
}

rollIndividualC5_10()