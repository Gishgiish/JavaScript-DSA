// Written in motivation to understand the call stack and the call stack window


function takeShower(){
    return "Showering!";
}

function eatBreatfast(){
    let meal = cookFood()
    return `Eating ${meal}`;
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random() * items.length)];
}

function wakeUp(){
    takeShower();
    eatBreatfast();
    console.log("Ok, ready to go to work!");
}

wakeUp();