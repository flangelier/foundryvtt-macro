async function rollTreasureHoardC11_16()
{
    let r = new Roll("1d100").roll();
    let resultd100 = r.result;
    console.log(`THC11_16 Rolled: ${resultd100}`);   
    let messages = [];
    
    r = new Roll("4000d6").roll();
    messages.push(`${r.result} gold pieces`);
    r = new Roll("500d6").roll();
    messages.push(`${r.result} platinum pieces`);

    if (resultd100 <= 3) { }
    else if (resultd100 <= 6) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result);
    }
    else if (resultd100 <= 9) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "750gp", r.result); 
    }
    else if (resultd100 <= 12) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "500gp", r.result);
    }
    else if (resultd100 <= 15) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
    }
    else if (resultd100 <= 19) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item A", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item B", r.result);
    }
    else if (resultd100 <= 23) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "750gp", r.result); 
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item A", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item B", r.result);
    }
    else if (resultd100 <= 26) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "500gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item A", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item B", r.result);
    }
    else if (resultd100 <= 29) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item A", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item B", r.result);    
    }
    else if (resultd100 <= 35) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 40) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "750gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result); 
    }
    else if (resultd100 <= 45) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "500gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 50) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        r = new Roll("1d6").roll();  
        await rollMagicItem(messages, "Random Magic Item C", r.result);
    }
    else if (resultd100 <= 54) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item D", r.result);
    }
    else if (resultd100 <= 58) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "750gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item D", r.result); 
    }
    else if (resultd100 <= 62) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "500gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item D", r.result);
    }
    else if (resultd100 <= 66) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item D", r.result);
    }
    else if (resultd100 <= 68) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result);
        await rollMagicItem(messages, "Random Magic Item E", 1);
    }
    else if (resultd100 <= 70) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "750gp", r.result); 
        await rollMagicItem(messages, "Random Magic Item E", 1);
    }
    else if (resultd100 <= 72) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "500gp", r.result);
        await rollMagicItem(messages, "Random Magic Item E", 1);
    }
    else if (resultd100 <= 74) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        await rollMagicItem(messages, "Random Magic Item E", 1);
    }
    else if (resultd100 <= 76) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result);
        await rollMagicItem(messages, "Random Magic Item F", 1);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item G", r.result); 
    }
    else if (resultd100 <= 78) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "750gp", r.result); 
        await rollMagicItem(messages, "Random Magic Item F", 1);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item G", r.result); 
    }
    else if (resultd100 <= 80) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "500gp", r.result);
        await rollMagicItem(messages, "Random Magic Item F", 1);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item G", r.result); 
    }
    else if (resultd100 <= 82) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        await rollMagicItem(messages, "Random Magic Item F", 1);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item G", r.result); 
    }
    else if (resultd100 <= 85) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item H", r.result); 
    }
    else if (resultd100 <= 88) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "750gp", r.result); 
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item H", r.result); 
    }
    else if (resultd100 <= 90) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "500gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item H", r.result); 
    }
    else if (resultd100 <= 92) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        r = new Roll("1d4").roll();  
        await rollMagicItem(messages, "Random Magic Item H", r.result); 
    }
    else if (resultd100 <= 94) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "250gp", r.result);
        await rollMagicItem(messages, "Random Magic Item I", 1);
    }
    else if (resultd100 <= 96) {
        r = new Roll("2d4").roll();
        await rollArtObjectsItem(messages, "750gp", r.result); 
        await rollMagicItem(messages, "Random Magic Item I", 1);
    }
    else if (resultd100 <= 98) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "500gp", r.result);
        await rollMagicItem(messages, "Random Magic Item I", 1);
    }
    else if (resultd100 <= 100) {
        r = new Roll("3d6").roll();
        await rollGemsItem(messages, "1000gp", r.result);
        await rollMagicItem(messages, "Random Magic Item I", 1);
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

rollTreasureHoardC11_16()