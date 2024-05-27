/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let rand = Math.random()
console.log(rand);
let First, Second, Third;

if (rand < 0.33){
    First = "Crazy"
}

else if (rand>=0.33 && rand<0.66){
    First = "Amazing"
}

else{
    First = "Fire"
}

console.log(First);


// Generating second word

rand = Math.random()
console.log(rand);
if (rand < 0.33){
    Second = "Engine"
}

else if (rand>=0.33 && rand<0.66){
    Second = "Foods"
}

else{
    Second = "Gargments"
}

console.log(Second);


// Generating third word

rand = Math.random()
console.log(rand);
if (rand < 0.33){
    Third = "Bros"
}

else if (rand>=0.33 && rand<0.66){
    Third = "limited"
}

else{
    Third = "Hub"
}

console.log(Third); 


console.log(`${First} ${Second} ${Third}`)