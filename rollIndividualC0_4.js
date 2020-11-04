async function rollIndividualC0_4()
{
    let r = new Roll("1d100").roll();
    let resultd100 = r.result;
    console.log(`ITC0_4 Rolled: ${resultd100}`);   
    let messages = [];
    
    if (resultd100 <= 30) {
        r = new Roll("5d6").roll();
        messages.push(`${r.result} copper pieces`);
    }
    else if (resultd100 <= 60) {
        r = new Roll("4d6").roll();
        messages.push(`${r.result} silver pieces`);
    }
    else if (resultd100 <= 70) {
        r = new Roll("15d6").roll();
        messages.push(`${r.result} silver pieces`);
    }
    else if (resultd100 <= 95) {
        r = new Roll("2d6").roll();
        messages.push(`${r.result} gold pieces`);
    }
    else if (resultd100 <= 100) {
        r = new Roll("1d6").roll();
        messages.push(`${r.result} platinum pieces`);
    }
    else {
        messages.push("Out of range...");
    }
    
    ChatMessage.create({content: messages.join("<br />"), whisper: ChatMessage.getWhisperRecipients("GM")});
}

rollIndividualC0_4()