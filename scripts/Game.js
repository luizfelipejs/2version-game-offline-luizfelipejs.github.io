export default function Game () {
    const state = {
        players: [
        { ID: "player1", x: 1, y: 1, score: 0 }, 
        { ID: "bot", x: 5, y: 5, score: 0 },
        { ID: "bot", x: 5, y: 5, score: 0 }
    ],
        fruits: [{ x: 3, y: 5 }],
    };

    
    const verifyPlayerCollisionWithFruits = () => {
        state.fruits.map((fruit, index) => {
            state.players.map(player => {
                if (player.x == fruit.x && player.y == fruit.y) {
                    player.score += 1
                    state.fruits.splice(index, 1)
                }
            }) 
        })
    }

    const movePlayer = (command) => {
        const currentPlayer = state.players[0];

        const acceptedMoves = {
            ArrowUp: () => (currentPlayer.y -= 1),
            ArrowDown: () => (currentPlayer.y += 1),
            ArrowLeft: () => (currentPlayer.x -= 1),
            ArrowRight: () => (currentPlayer.x += 1),
        };

        const movePressed = acceptedMoves[command.key];

        const blockPlayerCollisionWithBoards = () => {
            if (
                currentPlayer.x > 50 ||
                currentPlayer.x < 0 ||
                currentPlayer.y > 50 ||
                currentPlayer.y < 0
            ) {
                currentPlayer.x = 25;
                currentPlayer.y = 25;
            }
        };

        if (movePressed) {
            movePressed();
            blockPlayerCollisionWithBoards();
            verifyPlayerCollisionWithFruits();
        }

        console.log(
            `movendo o player que esta pressionando a tecla ${command.key}`
        );
    };

    const addFruit = () => {
        state.fruits.push({x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50)})
    } 

    const createBotBrain = (bot, currentFruit) => {
        const fruit = state.fruits[currentFruit];
        verifyPlayerCollisionWithFruits();

        if (bot.x < fruit.x) {
            bot.x += 1;
        }
        else if (bot.y < fruit.y) {
            bot.y += 1;
        }

        if (bot.x > fruit.x) {
            bot.x -= 1;
        }
        else if (bot.y > fruit.y) {
            bot.y -= 1;
        }

    } 


    return {
        movePlayer,
        state,
        addFruit,
        createBotBrain
    }
}