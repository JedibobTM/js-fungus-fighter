// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let characterAP = 100
let fungusHP = 100;
let attack = [
    {
        name: "arcaneScepter",
        apCost: 12,
        hpDmg: 14
    },
    {
        name: "entangle",
        apCost: 9,
        hpDmg: 23
    },
    {
        name: "dragonBlade",
        apCost: 38,
        hpDmg: 47
    },
    {
        name: "starFire",
        apCost: 33,
        hpDmg: 25
    }
];

function attackAbility(event, ability){
    console.log("IS THIS WORKING?");
}

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

// Clicking a button
// The button corresponds to attacks in the attack array
// Get the apCost and hpDamage for that attack from the array
// Check to make sure we have enough AP to do that attack
//  if yes, then attack and update AP meter
//  if ap hits zero and the fungus is still alive, then monster gets the 'jump' class and we lose
//  if not enough AP to do an attack, the button is disabled
//  Check the fungus's hp
//      if hp will fall below 50, then it regenrates 1 hp every second
//      if hp will hit 0, the fungus is dead. We have to give it the 'dead' class

onReady()