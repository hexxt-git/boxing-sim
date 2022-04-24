//warning this code is shit

// these are for the random boxers :
let names = ['james', 'timmy', 'jake', 'josh', 'lamar', 'lungs', 'dark', 'meme',
'walker', 'crawler', 'biker', 'bat', 'spiedr', 'sheep', 'shift', 'might', 'naruto',
'imposter', 'amogus', 'messi', 'ronaldo', 'OMG STOP', 'wojak', 'coomer', 'doomer',
'bloomer', 'bojack', 'broke', 'keanu reeves', 'mug', 'calculator'];
const MaxStrength = 7;
const MaxSpeed = 7;
const MaxAgility = 7;
const MaxHp = 50
// these are for the random boxers ^^^
let attacks = ['hit', 'punsh', 'kick', 'fist', 'spectacular punsh',
'will smith slap', 'DDOS', 'super slap', 'twerk', 'kiss', 'bite', 'lecture',
'gun shot', 'stab', 'hand grenade', 'dildo', 'piss', 'BONK', 'spoosh',
'flert', 'fart', 'nitro scam', 'fire ball', 'nuts', 'rasaingun', 'amogus stab'
,'atomic bomb', 'lick', 'dog', 'toe', 'finger'];

function rdm(max){
    return Math.floor(Math.random()*(max + 1))
}

function random( min, max){
    return Math.random() * ( max - min ) + min
}


class boxer {
    constructor( name, strength, speed, agility, hp) {
        this.name = name; //uselss
        this.strength = strength; // hit damage
        this.speed = speed; // decides who strikes first every turn + critical hits chance
        this.agility = agility; //dodge skill
        this.dodges = 10 * ( 0.03 * ( agility - 5 )*( agility - 5 )*( agility - 5 ) + 5 ) // doges chance
        this.hp = hp; // yk what fucking hp is
        this.age = 0; //how many matches it played
        this.wins = 0; // idk why am keeping track of these two
        this.losses = 0;

        this.identify = function(){ //make the boxer identifies him self
            return `${this.name}:
            strength: ${this.strength}.
            speed: ${this.speed}.
            agility: ${this.agility}.
            hp: ${this.hp}.`
        }
        this.hpLeft = function(){
            console.log(`${this.name} has: ${this.hp}HP left`)
        }
    }
}

function fight( boxer1, boxer2){
    console.log('contenders are: "'+ boxer1.name + '" and "'+ boxer2.name + '"')
    console.log(boxer1.identify())
    console.log(boxer2.identify())

    for ( let round = 1 ; round <= 12 ; round++){
        console.log(`%c    ~~~ ROUND ${round} BEGGINS NOW: ~~~`,'color:#47E')

        if ( boxer1.speed >= boxer2.speed){
            var first = boxer1
            var second = boxer2
        }
        else {
            var first = boxer2
            var second = boxer1
        }

        console.log(`${first.name} gets the first hit:`)
        //first hit
        if (second.dodges + rdm(100) - 50 > 50){
            console.log(`${second.name} dodges ${first.name}'s ${attacks[rdm(attacks.length -1)]}`)
            second.hpLeft();
        }
        else {
            let damageLost = Math.floor(first.strength * random( 0.5, 3.5)) + 4 //first hit bonus
            console.log(`${second.name} fails to dodge ${first.name}'s ${attacks[rdm(attacks.length -1)]} and losses ${damageLost}hp`)
            second.hp -= damageLost
            second.hpLeft();
        }
        if (second.hp <= 0){
            console.log(`%c${second.name} just died on round ${round} lol`, 'color:#D11')
            break
        }

        //second hit
        if (first.dodges + rdm(100) - 50 > 50){
            console.log(`${first.name} dodges ${second.name}'s ${attacks[rdm(attacks.length -1)]}`)
            first.hpLeft();
        }
        else {
            let damageLost = Math.floor(second.strength * random( 0.5, 3.5))
            console.log(`${first.name} fails to dodge ${second.name}'s ${attacks[rdm(attacks.length - 1)]} and losses ${damageLost}hp`)
            first.hp -= damageLost
            first.hpLeft();
        }
        if (first.hp <= 0){
            console.log(`%c${first.name} just died on round ${round} lol`, 'color:#D11')
            break
        }
    }

    let winner;
    let looser;
    let draw = false;
    if ( boxer1.hp > boxer2.hp){
        winner = boxer1;
        looser = boxer2;
    } else if (boxer1.hp < boxer2.hp){
        winner = boxer2;
        looser = boxer1;
    } else {
        draw = true;
    };

    console.log(`       %cGAME OVER`,'color:#D11')
    if (!draw){
        console.log(`and the winner is ${winner.name}`)
    }
    else{
        console.log(`it endded with a draw`)
    }
}


let random1 = new(boxer)(names[rdm(names.length - 2)], rdm(MaxStrength) + 3, rdm(MaxSpeed) + 3, rdm(MaxAgility) + 3, 100)
let random2 = new(boxer)(names[rdm(names.length - 2)], rdm(MaxStrength) + 3, rdm(MaxSpeed) + 3, rdm(MaxAgility) + 3, 100)

fight( random1, random2);



