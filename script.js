// 1
function fozzieBeaar(){
    console.log(`Wocka Wocka!`);
}
fozzieBeaar();

console.log(`======`);

// 2
function beaker(speak){
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);

    // OR
    // console.log(speak.repeat(4));
    // OR
    // console.log(`${speak}`, `${speak}`, `${speak}`, `${speak}`)
}
beaker(`Meep`);

console.log(`======`);

// 3
function muppetShow(a, b){
    if (a === `Muppet` && b === `Show`){
        return `It's time to play the music, It's time to light the lights.`;
    }
    return``;
}
console.log(muppetShow(`Muppet`, `Show`));
console.log(muppetShow(`Hi`, `Bye`));

console.log(`======`);

// 4
function kermit(){
    console.log(`Kermit the Frog`);
}
kermit();

// OR
/* function kermit(quote = `Kermit the Frog`){
    console.log(quote);
}
kermit(); 
*/

// OR
/*
function kermit(){
    return `Kermit the Frog`;
}
console.log(kermit());
*/

console.log(`======`);

// 5
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    }
    return false;
}

// OR
/*
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    } else {
    return false;
    }
}
*/

console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(3));

console.log(`======`);

// 6
const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet`);
}

manOrMuppet();

console.log(`======`);

// 7
rainbowConnection = () => console.log(`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers, and me.`);
rainbowConnection();

// OR
/*
rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers, and me.`;
console.log(rainbowConnection);
*/

console.log(`======`);

// 8
// no

// 9
// yes

// BONUS
// 10a
const newMuppetMovies = [
    `The Muppets`,
    `The Muppets Most Wanted`
];

// 10b
const uppers = newMuppetMovies.map(function(x){
    return x.toUpperCase();
});
console.log(uppers);

console.log(`======`);

// OR
/*
const upperMovies = newMuppetMovies.map(movie => movie.toLocaleUpperCase());
console.log(upperMovies);
*/

// 11a
const oldMuppetsMovies = [
`The Muppet Movie`,
`The Muppets Take Manhattan`,
`The Great Muppet Caper`,
`The Muppet Christmas Carol`,
`Muppet Treasure Island`,
`Muppets From Space`
];

// 11b
const a = oldMuppetsMovies.filter(twoMovies => twoMovies.length === 22);
console.log(a);

console.log(`======`);

// 12a
const charactersOne = [
    `Statler`,
    `Waldorf`
];

// 12b
const charactersTwo = [
    `The Swedish Chef`,
    `Animal`,
    `Rowlf`
];

// 12c (did not get)

randomMuppet = (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters.length)]}`);
}

// OR
/*
randomMuppet = characters => {
    characters[Math.floor(Math.random() * characters.length)];
    console.log(characters);
}
randomMuppet(charactersOne[Math.floor(Math.random() * charactersOne.length)]);
*/

// 12d
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

console.log(`======`);

// 13 (did not get)
/*
caps = string => {
    let chars = string.toLowerCase().split(``);
    for (i = 0; i < chars.length; i+=2){
        chars[i] = chars[i].toUpperCase();
    }
    console.log(chars.join(``));
}
caps(`Hello World`);
*/

// OR
/*
caps = (string) => {
    return string.split(``).map((v,i)=> i % 2 ? v.toLowerCase() : v.toUpperCase()).join(``);
}
console.log(caps(`Hello World`));
*/

// OR
caps = (string) => {
    let newString = ``;
    for (i = 0; i < string.length; i++){
        if (i % 2 === 0){
            newString += string[i].toUpperCase();
        } else {
            newString += string[i].toLowerCase();
        }
    }
    return newString;
}
console.log(caps(`Hello World`));

// 13 Extra Bonus (did not get)
caps = string => {
    let count = 0;
    let newString = ``;
    for (i = 0; i < string.length; i++){
        if (string[i] === ` `){
            newString += ` `;
        } else if (count % 2 === 0){
            newString += string[i].toUpperCase();
            count++;
        } else {
            newString += string[i].toLowerCase();
            count++;
        }
    }
    return newString
}
console.log(caps(`Hello World`));



