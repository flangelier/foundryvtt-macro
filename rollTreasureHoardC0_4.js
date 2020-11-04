async function rollTreasureHoardC0_4()
{
    let r = new Roll("1d100").roll();
    let resultd100 = r.result;
    console.log(`THC0_4 Rolled: ${resultd100}`);   
    let messages = [];
    
    r = new Roll("600d6").roll();
    messages.push(`${r.result} copper pieces`);
    r = new Roll("300d6").roll();
    messages.push(`${r.result} silver pieces`);
    r = new Roll("20d6").roll();
    messages.push(`${r.result} gold pieces`);

    if (resultd100 <= 6) { }
    else if (resultd100 <= 16) {
        r = new Roll("2d6").roll();
        await rollGemsItem(messages, "10gp", r.result);
    }
    else if (resultd100 <= 26) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "25gp", r.result);
    }
    else if (resultd100 <= 36) {
        r = new Roll("2d6").roll();
        await rollGemsItem(messages, "50gp", r.result);
    }
    else if (resultd100 <= 44) {
        r = new Roll("2d6").roll();
        await rollGemsItem(messages, "10gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item A", r.result);
    }
    else if (resultd100 <= 52) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "25gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item A", r.result);
    }
    else if (resultd100 <= 60) {
        r = new Roll("2d6").roll();
        await rollGemsItem(messages, "50gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item A", r.result);
    }
    else if (resultd100 <= 65) {
        r = new Roll("2d6").roll();
        await rollGemsItem(messages, "10gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item B", r.result);
    }
    else if (resultd100 <= 70) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "25gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item B", r.result);
    }
    else if (resultd100 <= 75) {
        r = new Roll("2d6").roll();
        await rollGemsItem(messages, "50gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item B", r.result);
    }
    else if (resultd100 <= 78) {
        r = new Roll("2d6").roll();
        await rollGemsItem(messages, "10gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 80) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "25gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 85) {
        r = new Roll("2d6").roll();
        await rollGemsItem(messages, "50gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 92) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "25gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item F", r.result);
    }
    else if (resultd100 <= 97) {
        r = new Roll("2d6").roll();
        await rollGemsItem(messages, "50gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item F", r.result);
    }
    else if (resultd100 <= 99) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "25gp", r.result);
        await rollMagicItem(messages, "Random Magic Item G", 1);
    }
    else if (resultd100 <= 100) {
        r = new Roll("2d6").roll();
        await rollGemsItem(messages, "50gp", r.result);
        await rollMagicItem(messages, "Random Magic Item G", 1);
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

rollTreasureHoardC0_4()