const myGames = [
    {
        name: 'Stardew Valley',
        type: 'farming simulator',
        graphics: 'pixel',
        numberOfPlayers: 'a single player, or up to eight players in co-op mode',
        shortDesc: 'your grandfather has left you an old farm and it is up to you to save the farm, befriend the local townspeople, and improve the town.',

    },
    {
        name: 'World of Warcraft',
        type: 'Massively Multiplayer Online Roleplaying Game (MMORPG)',
        graphics: '3D rendered',
        numberOfPlayers: 'millions of players',
        shortDesc: 'you are a champion of Azeroth, a world plagued by faction wars and existential perils. Your job is to team up with friends and allies to defeat the enemies who threaten your home. You can also explore new lands, complete quests, and make new friends along the way.',
    },
    {
        name: 'Slay the Princess',
        type: 'visual novel',
        graphics: '2D illustrated',
        numberOfPlayers: 'one player',
        shortDesc: 'you find yourself on a path in the woods, with a strange voice in your head telling you to slay a princess in order to save the world. Will you listen to him? The choice is yours, but be careful. Your actions may have unintended consequences.'
    }
];
/**Testing */
// console.log(myGames);

// const randomIdx = Math.round(Math.random() * myGames.length - 1);
// console.log('This game is ' + myGames[randomIdx].name + '. It is a ' + myGames[randomIdx].type + ' for ' + myGames[randomIdx].numberOfPlayers + '. In this game ' + myGames[randomIdx].shortDesc);
/** Testing over */

Number.game = window.prompt('I have three games. Please pick a number from 1-3 and I will tell you about a game.') - 1;

window.alert('This game is ' + myGames[Number.game].name + '. It is a ' + myGames[Number.game].type + ' with ' + myGames[Number.game].graphics + ' graphics for ' + myGames[Number.game].numberOfPlayers + '. In this game ' + myGames[Number.game].shortDesc);

// Easter Eggs
if(Number.game === 0) {
    console.log('Down with JojaCorp!');
};

if(Number.game === 1) {
    console.log('For the Horde!');
};

if(Number.game === 2) {
    console.log("Slay the Princess? Please don't!");
};