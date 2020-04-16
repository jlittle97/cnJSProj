// Pre-defined variables
let name = "";
let seed = "";
const seedLength = 16;
let rate;
let rand;
let forgetKeys;
let supplyAlcohol;
let supplyBulbs;
let supplyFood;
let supplyMedicine;
let supplyToiletries;
let weather;
let petrol;
let shopAlcohol;
let shopBulbs;
let shopFood;
let shopMedicine;
let shopToiletries;
let windRip;
let rainSlip;
let selfCheckout;
let indoorEvents;
let outdoorEvents;
let aisles = [ "alcohol", "bulbs", "food", "medicine", "toiletries" ];
let success = 0
let currentWeather;

// Events
indoorEvents = [ "spillage", "colleague", "neighbour" ];
outdoorEvents = [ "money", "petrol", "carkeys" ];


// Defining our functions
const endGame = () =>{
    alert("thanks for playing Pandemic Pandemonium we hope you enjoyed our game");
    throw new Error();
}

const supplyCheck = () => {
    // How much of each supply owned
    if ( supplyAlcohol > 6 ) {
        supplyAlcohol = 7;
    }
    if ( supplyBulbs > 4 ) {
        supplyBulbs = 5;
    }
    if ( supplyFood > 6 ) {
        supplyFood = 7;
    }
    if ( supplyMedicine > 6 ) {
        supplyMedicine = 7;
    }
    if ( supplyToiletries > 6 ) {
        supplyToiletries = 7;
    }
    alert(`After your trip to the store you have: \n${supplyFood} day(s) of food, \n${supplyMedicine} day(s) of medicine, \n${supplyToiletries} day(s) of toiletries, \n${supplyAlcohol} day(s) of alcohol and, \n${supplyBulbs} spare light bulb(s)!`);

    switch (true) {
        case ( supplyAlcohol > 6 && supplyBulbs > 4 && supplyFood > 6 && supplyMedicine > 6 && supplyToiletries > 6 ):
            //successful trip
            //well done
            endGame();
            break;
        case ( supplyAlcohol < 7 ):
            alert("You don't quite have enough alcohol to last a whole week, but it's hardly an essential!");
        case ( supplyBulbs < 5 ):
            alert("Not buying enough lightbulbs means you'll just have to put up with living in the dark for a bit longer.");
        case ( supplyFood < 7 ):
            alert("That's not quite enough food to get through the week, looks like you're going to have to go shopping again :(");
            success++;
        case ( supplyMedicine < 7 ):
            alert("You really should have got more medicine, maybe other shops will have some. Guess you'll have to head out again...");
            success++;
        case ( supplyToiletries < 7 ):
            alert("With insufficient toiletries you're going to be really nasty by the end of the week...");
            success++;
        case ( success > 0 ):
            alert("Looks like you failed to get enough supplies for the week ahead, whether you try and make do, or whether you force yourself back out for another trip is up to you!");
            endGame();
            break;
        case (success = 0 ):
            alert ("Congratulations! You obtained enough supplies to make it through the week, looks like you can relax and try to make the most of your time in lockdown.");
            endGame();
        
    }
}

const checkKeys = () => {
    alert("as you get to your door you fumble around in your pocket for your house keys as...")
    if (forgetKeys < 1){
        alert("you cant find them and the door is lock. You really got though all that just to lose your keys. You lose");
        endGame();
    } else {
        alert("you get them out open your door and with a sigh of relief sit down on the sofa with all your shopping done for the week");
        supplyCheck();
    }
}

const spillage = () => {
    alert("There's a spillage in the aisle");
    decision01 = prompt("Do you go through anyway or go around and come from the other direction? [Through/Around]").toLowerCase();
    while (decision01 === "" || decision01 === null){
        alert ("You need to make a decision");
        decision01 = prompt("Do you go through anyway or go around and come from the other direction? [Through/Around]").toLowerCase();
    }
    while (decision01 != "through" && decision01 != "around"){
        alert ("You need to make a decision");
        decision01 = prompt("Do you go through anyway or go around and come from the other direction? [Through/Around]").toLowerCase();
    }
    if (decision01 == "through") {
        alert("You decide you don't have time to go all the way around and step forward towards the spillage...");//more flavour
        rand = Math.floor(Math.random() * 10)
        if (rand < rate){
            alert("As your foot presses down against the wet floor, it suddenly gives way");
            alert("The next thing you know you're waking up in a hospital bed with a bandage on your head, turns out you shouldn't have rushed!")
            endGame();
        } else {
            alert("You walk carefully through the spillage, making sure not to lose your footing.");
            return;
        }
    } else if (decision01 == "around") {
        alert("Probably best not to risk going through the spillage, you make the safe choice and walk around.");
        return;
    }
}

const colleague = () => {
    alert ("as you go down the aisle you see a familiar face waving over to you as you awkwardly wave back you wonder whether you should approach them")
    decision02 = prompt ("do you approach them yes/no").toLowerCase();
    while (decision02 === "" || decision02 === null){
        alert ("You need to make a decision");
        decision02 = prompt ("do you approach them yes/no").toLowerCase();
    }
    while (decision02 != "yes" && decision02 != "no"){
         alert ("You need to make a decision");
         decision02 = prompt ("do you approach them yes/no").toLowerCase();
    }
    if (decision02 == "yes"){
        alert ("as you and your colleague get talking they unexpectedly ask you if you wanna come over for dinner");
        decision002 = prompt("do you accept yes/no").toLowerCase();
            while (decision002 === "" || decision002 === null){
                alert ("You need to make a decision")
                decision002 = prompt("do you accept yes/no").toLowerCase();
            }
            while (decision002 != "yes" && decision002 != "no"){
                alert ("You need to make a decision");
                decision002 = prompt("do you accept yes/no").toLowerCase();
            }
            if (decision002 == "yes"){
                alert("after being done with your shopping you go over to your colleague place and have a nice meal with some good company who offer to let you stay over for the night. You win");
                endGame();
            } else if (decision002 == "no") {
                alert("you politely decline the offer and continue on with your day");
                return;

            }
    } else if (decision02 == "no") {
        alert("You'd rather not talk to anyone during this pandemic");
        return;
    }
}

const neighbour = () => {
    supplyAlcohol = 7;
    supplyBulbs = 5;
    supplyFood = 7;
    supplyMedicine = 7;
    supplyToiletries = 7;
    alert ("As you go though the aisle you neighbour bumps into you and you both start talking and doing your shopping together");
    alert ("as you reach the till you realise you forgot to bring your wallet about to give up your neighbour offers to pay it for you");
    decision03 = prompt ("do you take his offer yes/no").toLowerCase();
        while (decision03 === "" || decision03 === null){
            alert ("You need to make a decision");
            decision03 = prompt ("do you take his offer yes/no").toLowerCase();
        }
        while (decision03 != "yes" && decision03 != "no"){
            alert ("You need to make a decision");
            decision03 = prompt ("do you take his offer yes/no").toLowerCase();
        }
        if (decision03 == "yes") {
            alert("Grateful for your neighbour's help you get to your car and drive home");
            checkKeys();
            return;
        } else if (decision03 == "no") {
            alert("Not taking your neighbour offer you realise you're either gonna have to give up and go home with nothing or take your shopping and run with it");
            decision003 = prompt("do you steal or give up").toLowerCase();
            while (decision003 === "" || decision003 === null){
                alert ("You need to make a decision");
                decision003 = prompt("do you steal or give up").toLowerCase();
            }
            while (decision003 != "steal" && decision003 != "give up"){
                alert ("You need to make a decision");
                decision003 = prompt("do you steal or give up").toLowerCase();
            }
            if (decision003 == "steal") {
                    alert("You grab your shopping and run off and swear you heard one of the employees call the police, but you reach your car and start driving off");
                    police = Math.floor(Math.random() * 10);
                if (police < rate){
                    alert("speeding off thinking you got away you suddenly hear sirens and realises your adventure is over and get caught. You lose");
                    endGame();
                } else {
                    alert("darting off and speeding down allyways to make sure if anyone is following you can't you manage to get away and get home");
                    checkKeys();
                }
            } else if (decision003 == "give up") {
            alert("today is not your day. You lose");
            endGame();
        }
    }
}

const money = () => {
    alert("As you walk to your car you find a wallet on the floor with no adress in it but some money do you take it or leave it at the shops lost and found");
    decision04 = prompt("do you take it? [yes/no]").toLowerCase();
    while (decision04 === "" || decision04 === null){
        alert ("You need to make a decision");
        decision04 = prompt("do you take it? [yes/no]").toLowerCase();
    }
    while (decision04 != "yes" && decision04 != "no"){
        alert ("You need to make a decision");
        decision04 = prompt("do you take it? [yes/no]").toLowerCase();
    }
    if (decision04 == "yes"){
        alert("I feel bad for whoever lost it but hey its yours now");
        checkKeys();
    }
    else if (decision04 == "no"){
        alert("you take it to lost and found hoping whoever lost it finds it again");
        checkKeys();
    }
}

const checkPetrol = () => {
    if ( petrol < rate ) {
        
        alert("as you try to turn on the car ignition you notice you have no fuel but luckily the shop has a petrol station nearby will you go get a refill or just push the car and hope it will start and get you home");
        decision05 = prompt("will you find a refill or push your car  refill/push").toLowerCase();
        while (decision05 === "" || decision05 === null){
            alert ("You need to make a decision");
            decision05 = prompt("will you find a refill or push your car  refill/push").toLowerCase();
        }
        while (decision05 != "refill" && decision05 != "push"){
            alert ("You need to make a decision");
            decision05 = prompt("will you find a refill or push your car  refill/push").toLowerCase();
        }
        if (decision05 == "push"){
            alert("you spend a couple of hours trying to push your car in order to make it work and as you give it one last push you grow weak and see everything getting dark");
            alert("you passed out from over exhaustion you lose")
            endGame();
        } else if (decision05 == "refill"){
            alert("going to the station and buying a jerrycan and some petrol took a little bit of time but you manage to fill your car and get home");
            checkKeys();
        }
    }
}

const keys = () => {
    alert ("as you get to your vehical you reach down into your pocket and panic from the lack of contents that were suppose to be your keys and as you look though your car window you see them there sitting on the drivers seat and while you do have your phone so you could just call a taxi your mind cant exclude the idea of just smashing the window and being done and over with it")
    alert ("damn your keys are locked in the car, will you smash the glass to get the keys or just call a taxi");
    decision06 = prompt("will you \"smash the glass\" or call a taxi").toLowerCase();
    while (decision06 === ""|| decision06 === null){
        alert ("You need to make a decision");
        decision06 = prompt("will you smash the glass or call a taxi").toLowerCase();
    }
    while (decision06 != "smash" && decision06 != "call a taxi"){
        alert ("You need to make a decision");
        decision06 = prompt("will you smash the glass or call a taxi").toLowerCase();
    }
    if (decision06 == "smash"){
        alert("well done you got your keys and glass everywhere");
        checkKeys();
    } else if (decision06 == "call a taxi"){
        alert("atleast youre sensible");
        checkKeys();
    }
}

const chooseIn = () => {
    chosenEventIn = indoorEvents[Math.floor(Math.random() * indoorEvents.length)];
    if ( chosenEventIn == "neighbour" ) {
        neighbour();
        return;
    } else if ( chosenEventIn == "colleague" ) {
        colleague();
        return;
    } else {
        spillage();
        return;
    }   
}

const chooseOut = () => {
    chosenEventOut = outdoorEvents[Math.floor(Math.random() * outdoorEvents.length)];
    if ( chosenEventOut == "money" ) {
        money();
        return;
    } else if ( chosenEventOut == "petrol" ) {
        checkPetrol();
        return;
    } else {
        carkeys();
        return;
    }
}

const doEvent = () => {
    rand = Math.floor(Math.random() * 10);
    if ( rand < rate ) {
        event = true;
    } else {
        event = false;
    }
    return event;
}

const decSprint = () => {
    decision5 = prompt("Do you \"walk\" back to your car or do you \"run\"? [Walk/Run]").toLowerCase();
    while ( decision5 === "" || decision5 === null) {
        alert ( "You need to make a decision!" );
        decision5 = prompt("Do you \"walk\" back to your car or do you \"run\"?").toLowerCase();
    }
    while ( decision5 != "walk" && decision5 != "run" ) {
        alert ( "Please enter \"Walk\" or \"Run\"");
        decision5 = prompt("Do you \"walk\" back to your car or do you \"run\"?").toLowerCase();
    }
    if ( decision5 == "walk" ) {
        rate++;
        if ( doEvent() ) {
            chooseOut();
            supplyCheck();
        } else {
            supplyCheck();
        }
    } else {
        rate--;
        if ( doEvent() ) {
            chooseOut();
            supplyCheck();
        }
        if ( weather < 4 ) {
            if (rainSlip < 2){
                alert ("As you sprint outside with your shopping you slip on the wet floor dropping all your shopping and giving yourself a mild concussian");
                alert ("You lose")
                endGame();
            } else {
                alert ("As you sprint outside with your shopping you notice how slipply the floor is with the rain and where able to keep your footing and now proud of your footwork you reach your car and drive smugly home") 
                supplyCheck();
            }
        } else if ( weather < 7 ) {
            if ( windRip < 5 ) {
                alert("as you run to your car with your shopping and the wind pushing against you, you suddenly feel alot of weight lifted of your hands and as you look back you see your bags ripped and all your shopping on the floor")
                alert("you lose")
                endGame();
            } else {
                alert("as you run to your car with your shopping and the wind pushing against you, you manage to get to your car and drive off")
                supplyCheck();
            }
        } else {
            alert("as you sprint to your car in broad daylight you get some weird looks but you get to your car in a hastend manner")
            supplyCheck();
        }
    }
}

const checkout = () => {
    alert("you wait your turn and awkwardly try and get all your items though while also avoiding the person scaning them")
    decSprint();
    return;
}

const sCheckout = () => {
    if ( selfCheckout < 5 ) {
        alert ( "Unexpected item in the baggage area please wait for assitance" );
        alert ( "These damn machines! You was hoping to avoid all of this" );
    } 
    decSprint();
    return;
}

const decCheckout = () => {
    alert("while done with your shopping you wonder whether you should use the self service till or just use a normal till and risk interaction with someone during the pandemic")
    decision4 = prompt("How would you like to checkout? [Self/Cashier]").toLowerCase();
    while ( decision4 === "" || decision4 === null) {
        alert ( "You need to make a decision!" );
        decision4 = prompt("How would you like to checkout? [Self/Cashier]").toLowerCase();
    }
    while ( decision4 != "self" && decision4 != "cashier") {
        alert ( "Please enter \"Self\" or \"Cashier\"");
        decision4 = prompt("How would you like to checkout? [Self/Cashier]").toLowerCase();
    }
    if ( decision4 == "self" ) {
        sCheckout();
        return;
    } else {
        checkout();
        return;
    }
}

const chooseAisle = () => {
    alert ("You reach the shop and as you walk in you wonder to yourself which aisle do I go down first")
    decision3 = prompt(`Which aisle do you want to go to? [${aisles}]`).toLowerCase();
    while ( decision3 === "" || decision3 === null) {
        alert ( "You need to make a decision!" );
        decision3 = prompt(`Which aisle do you want to go to? [${aisles}]`).toLowerCase();
    }
    while ( aisles.indexOf(decision3) < 0 ) {
        alert ( `Please enter [${aisles}]`);
        decision3 = prompt(`Which aisle do you want to go to? [${aisles}]`).toLowerCase();
    }
    
    switch (true) {
        case decision3 == "alcohol":
            alert ( shopAlcohol );
            supplyAlcohol += shopAlcohol;
            break;
        case decision3 == "bulbs":
            alert ( shopBulbs );
            supplyBulbs += shopBulbs;
            break;
        case decision3 == "food":
            alert ( shopFood );
            supplyFood += shopFood;
            break;
        case decision3 == "medicine":
            alert ( shopMedicine);
            supplyMedicine += shopMedicine;
            break;
        case decision3 == "toiletries":
            alert ( shopToiletries );
            supplyToiletries += shopToiletries;
            break;
    }
    aisles.splice(aisles.indexOf(decision3),1);

    if ( doEvent() ) {
        chooseIn();
    }

    if ( aisles.length > 0 ) {
        keepShopping = prompt("Would you like to keep shopping? [Yes/No]").toLowerCase();
    } else {
        decCheckout();
    }
    while ( keepShopping == "" || keepShopping == null) {
        alert ( "You need to make a decision!" );
        keepShopping = prompt("Would you like to keep shopping? [Yes/No]").toLowerCase();
    }
    while ( keepShopping != "yes" && keepShopping != "no" ) {
        alert ( "You need to make a decision!" );
        keepShopping = prompt("Would you like to keep shopping? [Yes/No]").toLowerCase();
    } 
    if ( keepShopping == "yes" ) {
        chooseAisle();
        return;
    } else {
        decCheckout();
        return;
    }
}

const shopChoice = () => {
    alert("Now decide on where to go")
    decision2 = prompt("Which shop do you choose Lidl(), Asda or, Waitrose?").toLowerCase();
    while ( decision2 === "" || decision2 === null) {
        alert ( "You need to make a decision!" );
        decision2 = prompt("Which shop do you choose Lidl (High encouter chance), Asda (Medium encouter chance) or, Waitrose (Low encouter chance))?").toLowerCase();
    }
    while ( decision2 != "waitrose" && decision2 != "lidl" && decision2 != "asda"){
        alert("Please enter \"aldi\" or \"lidl\" or \"asda\"");
        decision2 = prompt("Which shop do you choose Lidl, Asda or, Waitrose?").toLowerCase();
    }
    if (decision2 == "waitrose") {
        rate = 2;
    } else if (decision2 == "asda") {
        rate = 4;
    } else {
        rate = 7;
    }
    
    chooseAisle();
    return;
}

const leave = () => {
    alert("You venture outside your home and get to your trusty car wondering which shop you will decide to go to today");//flavour
    shopChoice();
}

const stay = () => {
    if ( supplyToiletries > 6 && supplyMedicine > 6 && supplyFood > 6 ) {
        if ( supplyAlcohol > 6 && supplyBulbs > 4 ) {
            alert("Looks like you have enough of anything, so why would you go shopping?!");
        } else if ( supplyBulbs > 4 ) {
            alert("Alcohol is hardly an essential anyway.");
        } else if ( supplyAlcohol > 6) {
            alert("Might get a bit dark, but you'll get by!");
        } else {
            alert("");
        }
    } else if ( supplyFood < 7 ) {
        alert("Looks like you ran out of food, probably should have gone to the shops...");
    } else if ( supplyMedicine < 7 ) {
        alert("With not enough medicine in the house, better hope you don't get sick");
    } else {
        alert("Without being able to clean yourself properly, you die of dysentery...");
    }
}

const decLeave = () => {
    alert(`You currently have: \n${supplyFood} day(s) of food, \n${supplyMedicine} day(s) of medicine, \n${supplyToiletries} day(s) of toiletries, \n${supplyAlcohol} day(s) of alcohol and, \n${supplyBulbs} spare light bulb(s)! (you only need 5)`);
    decision1 = prompt ("Are you going to go shopping? [Yes/No]").toLowerCase();
    while ( decision1 === "" ) {
        alert ( "You need to make a decision!" );
        decision1 = prompt ("Are you going to go shopping? [Yes/No]").toLowerCase();
    }
    while ( decision1 != "yes" && decision1 != "no" ){
        alert("Please enter \"Yes\" or \"No\"");
        decision1 = prompt ("Are you going to go shopping? [Yes/No]").toLowerCase();
    }
}


// Run the game
const startGame = () => {
    seed = "";
    name = "";
    aisles = ["alcohol", "bulbs", "food", "medicine", "toiletries"];
    // seed of the form "forgetKeys, supplyFood, supplyToiletries, supplyAlcohol, supplyMedicine, supplyBulbs, weather, petrol, shopFood, shopToiletries, shopAlcohol, shopMedicine, shopBulbs, windRip, rainSlip, selfCheckout"
    const makeSeed = (seedLength) => {
        let nums = "0123456789";
        for ( i = 0; i < seedLength; i++ ) {
            seed += nums.charAt(Math.floor(Math.random() * nums.length));
        }
    }
    makeSeed(seedLength);

    forgetKeys = parseInt(seed.charAt(0));
    supplyAlcohol = parseInt(seed.charAt(1));
    supplyBulbs = parseInt(seed.charAt(2));
    supplyFood = parseInt(seed.charAt(3));
    supplyMedicine = parseInt(seed.charAt(4));
    supplyToiletries = parseInt(seed.charAt(5));
    weather = parseInt(seed.charAt(6));
    petrol = parseInt(seed.charAt(7));
    shopAlcohol = parseInt(seed.charAt(8));
    shopBulbs = parseInt(seed.charAt(9));
    shopFood = parseInt(seed.charAt(10));
    shopMedicine = parseInt(seed.charAt(11));
    shopToiletries = parseInt(seed.charAt(12));
    windRip = parseInt(seed.charAt(13));
    rainSlip = parseInt(seed.charAt(14));
    selfCheckout = parseInt(seed.charAt(15));
    
    if ( weather < 4 ) {
        currentWeather = "rainy";
    } else if ( weather < 7 ) {
        currentWeather = "windy";
    } else {
        currentWeather = "clear";
    }
    


    // How much of each supply owned
    if ( supplyAlcohol > 6 ) {
        supplyAlcohol = 7;
    }
    if ( supplyBulbs > 4 ) {
        supplyBulbs = 5;
    }
    if ( supplyFood > 6 ) {
        supplyFood = 7;
    }
    if ( supplyMedicine > 6 ) {
        supplyMedicine = 7;
    }
    if ( supplyToiletries > 6 ) {
        supplyToiletries = 7;
    }
    alert("Welcome to Pandemic Pandemonium the year is 20XX a global pandemic is out and a wave of mass hysteria has been plaguing the world while most of the world is in lockdown you need to prepare yourself for the upcoming week which means going out and getting resources")
    name = prompt("What is your name?");
    while ( name === "" || name === null) {
        alert ("Please enter your name!");
        name = prompt("What is your name?");
    }
    alert(`Hello ${name} your next step is making sure you have enough resources to make it though the next 7 days`)
    decLeave(); 
    if ( decision1 == "yes" ) {
        leave();
    }else {
        stay();
    }
}