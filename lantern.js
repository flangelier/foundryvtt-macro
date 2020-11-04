run()

async function run()
{
  if (token == undefined) {
    ui.notifications.warn("No token selected.");
    return;
  }

  let actor = token.actor;

  let lantern = actor.data.items.find(x => x.name.toLowerCase().includes("lantern"));
  if (lantern == undefined) {
    ui.notifications.warn(`${actor.data.name} don't have any lantern.`);
    return;
  }
  
  let oil = actor.data.items.find(x => x.name.toLowerCase().includes("oil"));
  if (oil == undefined) {
    ui.notifications.warn(`${actor.data.name} don't have any oil to light the lantern.`);
    return;
  }

  let lanternStatus = lantern.data.status;
  switch(lanternStatus){
    case "lit":
      lanternStatus = "hooded";
      await _hoodLantern(token)
      break;
    case "hooded":
      lanternStatus = "closed";
      await _closeLantern(token);
      break;
    default:
        if (oil.data.quantity < 1) {
            ui.notifications.warn(`${actor.data.name} don't have any oil to light the lantern.`);
            return;
        }
        lanternStatus = "lit";
        await _lightLantern(token);
        break;
  }
  lantern.data.status = lanternStatus;
}

async function _lightLantern(token){
  token.update({
    'brightLight': 30,
    'dimLight' : 60,
    'lightAnimation': {
      'intensity': 5,
      'speed': 5,
      'type': 'torch'
      }
  }); 
}

async function _hoodLantern(token){
  token.update({
    'brightLight': 0,
    'dimLight' : 5,
    'lightAnimation': {
      'intensity': 5,
      'speed': 5,
      'type': 'torch'
      }
  });
}

async function _closeLantern(token){
  token.update({
    'brightLight': 0,
    'dimLight' : 0,
    'lightAnimation': {
      'intensity': 5,
      'speed': 5,
      'type': ''
      }
  });
}