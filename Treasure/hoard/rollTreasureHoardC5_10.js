async function rollTreasureHoardC5_10()
{
    let r = new Roll("1d100").roll();
    let resultd100 = r.result;
    console.log(`THC5_10 Rolled: ${resultd100}`);   
    let messages = [];
    
    r = new Roll("200d6").roll();
    messages.push(`${r.result} copper pieces`);
    r = new Roll("2000d6").roll();
    messages.push(`${r.result} silver pieces`);
    r = new Roll("600d6").roll();
    messages.push(`${r.result} gold pieces`);
    r = new Roll("30d6").roll();
    messages.push(`${r.result} platinum pieces`);

    if (resultd100 <= 4) { }
    else if (resultd100 <= 10) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "25gp", r.result);
    }
    else if (resultd100 <= 16) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "50gp", r.result);
    }
    else if (resultd100 <= 22) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "100gp", r.result);
    }
    else if (resultd100 <= 28) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result); 
    }
    else if (resultd100 <= 32) {  
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "25gp", r.result);  
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item A", r.result);
    }
    else if (resultd100 <= 36) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "50gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item A", r.result);
    }
    else if (resultd100 <= 40) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "100gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item A", r.result);
    }
    else if (resultd100 <= 44) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result); 
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item A", r.result);
    }
    else if (resultd100 <= 49) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "25gp", r.result);  
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item B", r.result);
    }
    else if (resultd100 <= 54) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "50gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item B", r.result);
    }
    else if (resultd100 <= 59) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "100gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item B", r.result);
    }
    else if (resultd100 <= 63) {
        r = new Roll("2d4").roll(); 
        await rollArtObjectsItem(messages, "250gp", r.result); 
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item B", r.result);
    }
    else if (resultd100 <= 66) { 
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "25gp", r.result);  
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 69) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "50gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 72) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "100gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 74) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result); 
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 76) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "25gp", r.result);  
        await rollMagicItem(messages, "Random Magic Item D", 1);
    }
    else if (resultd100 <= 78) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "50gp", r.result);
        await rollMagicItem(messages, "Random Magic Item D", 1);
    }
    else if (resultd100 <= 79) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "100gp", r.result);
        await rollMagicItem(messages, "Random Magic Item D", 1);
    }
    else if (resultd100 <= 80) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result); 
        await rollMagicItem(messages, "Random Magic Item D", 1);
    }
    else if (resultd100 <= 84) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "25gp", r.result);  
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item F", r.result);
    }
    else if (resultd100 <= 88) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "50gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item F", r.result);
    }
    else if (resultd100 <= 91) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "100gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item F", r.result);
    }
    else if (resultd100 <= 94) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result); 
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item F", r.result);
    }
    else if (resultd100 <= 96) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "100gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item G", r.result);
    }
    else if (resultd100 <= 98) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result); 
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item G", r.result);
    }
    else if (resultd100 <= 99) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "100gp", r.result);
        await rollMagicItem(messages, "Random Magic Item H", 1);
    }
    else if (resultd100 <= 100) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result);  
        await rollMagicItem(messages, "Random Magic Item H", 1);
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

rollTreasureHoardC5_10()