async function rollTreasureHoardC17more()
{
    let r = new Roll("1d100").roll();
    let resultd100 = r.result;
    console.log(`THC17more Rolled: ${resultd100}`);   
    let messages = [];
    
    r = new Roll("12000d6").roll();
    messages.push(`${r.result} gold pieces`);
    r = new Roll("8000d6").roll();
    messages.push(`${r.result} platinum pieces`);

    if (resultd100 <= 2) { }
    else if (resultd100 <= 5) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        r = new Roll("1d8").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 8) {
        r = new Roll("1d10").roll();
        await rollArtObjectsItem(messages, "2500gp", r.result); 
        r = new Roll("1d8").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 11) {
        r = new Roll("1d4").roll();
        await rollArtObjectsItem(messages, "7500gp", r.result);
        r = new Roll("1d8").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 14) {
        r = new Roll("1d8").roll();
        await rollGemsItem(messages, "5000gp", r.result);
        r = new Roll("1d8").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 22) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item D", r.result);
    }
    else if (resultd100 <= 30) {
        r = new Roll("1d10").roll();
        await rollArtObjectsItem(messages, "2500gp", r.result); 
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item D", r.result);
    }
    else if (resultd100 <= 38) {
        r = new Roll("1d4").roll();
        await rollArtObjectsItem(messages, "7500gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item D", r.result);
    }
    else if (resultd100 <= 46) {
        r = new Roll("1d8").roll();
        await rollGemsItem(messages, "5000gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item D", r.result);
    }    
    else if (resultd100 <= 52) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item E", r.result);
    }
    else if (resultd100 <= 58) {
        r = new Roll("1d10").roll();
        await rollArtObjectsItem(messages, "2500gp", r.result); 
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item E", r.result);
    }
    else if (resultd100 <= 63) {
        r = new Roll("1d4").roll();
        await rollArtObjectsItem(messages, "7500gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item E", r.result);
    }
    else if (resultd100 <= 68) {
        r = new Roll("1d8").roll();
        await rollGemsItem(messages, "5000gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item E", r.result);
    }    
    else if (resultd100 <= 69) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item G", r.result);
    }
    else if (resultd100 <= 70) {
        r = new Roll("1d10").roll();
        await rollArtObjectsItem(messages, "2500gp", r.result); 
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item G", r.result);
    }
    else if (resultd100 <= 71) {
        r = new Roll("1d4").roll();
        await rollArtObjectsItem(messages, "7500gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item G", r.result);
    }
    else if (resultd100 <= 72) {
        r = new Roll("1d8").roll();
        await rollGemsItem(messages, "5000gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item G", r.result);
    }    
    else if (resultd100 <= 74) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item H", r.result);
    }
    else if (resultd100 <= 76) {
        r = new Roll("1d10").roll();
        await rollArtObjectsItem(messages, "2500gp", r.result); 
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item H", r.result);
    }
    else if (resultd100 <= 78) {
        r = new Roll("1d4").roll();
        await rollArtObjectsItem(messages, "7500gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item H", r.result);
    }
    else if (resultd100 <= 80) {
        r = new Roll("1d8").roll();
        await rollGemsItem(messages, "5000gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item H", r.result);
    }    
    else if (resultd100 <= 85) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item I", r.result);
    }
    else if (resultd100 <= 90) {
        r = new Roll("1d10").roll();
        await rollArtObjectsItem(messages, "2500gp", r.result); 
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item I", r.result);
    }
    else if (resultd100 <= 95) {
        r = new Roll("1d4").roll();
        await rollArtObjectsItem(messages, "7500gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item I", r.result);
    }
    else if (resultd100 <= 100) {
        r = new Roll("1d8").roll();
        await rollGemsItem(messages, "5000gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item I", r.result);
    }
    else {
        messages.push("Out of range...");
    }
        
    ChatMessage.create({content: messages.join("<br />"), whisper: ChatMessage.getWhisperRecipients("GM")});
}

async function rollArtObjectsItem(messagesArray, worth, numberOfItem)
{
    let rollTable = game.tables.getName(`${worth} Art Object`);
    let i;
    for (i = 0; i < numberOfItem; i++) {
        messagesArray.push(`${rollTable.roll().results[0].text} (Art Object Worth ${worth})`);
    }
}

async function rollGemsItem(messagesArray, worth, numberOfItem)
{
    let rollTable = game.tables.getName(`${worth} Gemstones`);
    let i;
    for (i = 0; i < numberOfItem; i++) {
        messagesArray.push(`${rollTable.roll().results[0].text} (Gem worth ${worth})`);
    }
}

async function rollMagicItem(messagesArray, rollTableName, numberOfItem)
{
    let rollTable = game.tables.getName(rollTableName);
    let i;
    for (i = 0; i < numberOfItem; i++) {
        messagesArray.push(rollTable.roll().results[0].text);
    }
}

rollTreasureHoardC17more()