"use strict";
// enum Choice {
//     STONE = 'stone',
//     SCISSORS = 'scissors',
//     PAPER = 'paper'
// }
class GameElement {
    constructor() {
        this.name = '';
    }
    checkIfWinning(choice) {
        return true;
    }
}
;
class Stone extends GameElement {
    constructor() {
        super(...arguments);
        this.name = 'stone';
    }
    static checkIfWinning(choice) {
        return choice.toLowerCase() === 'scissors';
    }
    ;
}
;
class Scissors extends GameElement {
    constructor() {
        super(...arguments);
        this.name = 'scissors';
    }
    static checkIfWinning(choice) {
        return choice.toLowerCase() === 'paper';
    }
    ;
}
;
class Paper extends GameElement {
    constructor() {
        super(...arguments);
        this.name = 'paper';
    }
    static checkIfWinning(choice) {
        return choice.toLowerCase() === 'stone';
    }
    ;
}
;
class Player {
    constructor() {
        this.makeChoice = null;
        this._choice = null;
    }
    ;
    getChoice() {
        return this._choice;
    }
    ;
    setChoice(choice) {
        this._choice = choice;
    }
    ;
}
;
class User extends Player {
    constructor() {
        super();
        this.makeChoice = () => {
            // let input: string | null = prompt('Make your choice:' + '\n' + '1 - Stone' + '\n' + '2 - Scissors' + '\n' + '3 - Paper');
            const move = document.getElementById('move');
            const stoneBtn = document.getElementById('stone');
            const scissorsBtn = document.getElementById('scissors');
            const paperBtn = document.getElementById('paper');
            stoneBtn === null || stoneBtn === void 0 ? void 0 : stoneBtn.addEventListener('click', () => {
                this.setChoice(Stone);
                console.log(`User choose ${this.getChoice().name}`);
            });
            scissorsBtn === null || scissorsBtn === void 0 ? void 0 : scissorsBtn.addEventListener('click', () => {
                this.setChoice(Scissors);
                console.log(`User choose ${this.getChoice().name}`);
            });
            paperBtn === null || paperBtn === void 0 ? void 0 : paperBtn.addEventListener('click', () => {
                this.setChoice(Paper);
                console.log(`User choose ${this.getChoice().name}`);
            });
        };
    }
    ;
}
;
class Comp extends Player {
    constructor() {
        super();
        this.makeChoice = () => {
            const btn = document.getElementById('stone');
            btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
                const random = Math.ceil(Math.random() * 3);
                switch (random) {
                    case 1:
                        this.setChoice(Stone);
                        break;
                    case 2:
                        this.setChoice(Scissors);
                        break;
                    case 3:
                        this.setChoice(Paper);
                        break;
                }
                ;
                console.log(`Computer choose ${this.getChoice().name}`);
            });
        };
    }
}
;
class Game {
    constructor(user, comp) {
        this.user = user;
        this.comp = comp;
        this.isOver = false;
    }
    ;
    init() {
        while (!this.isOver) {
            this.user.makeChoice();
            this.comp.makeChoice();
            console.log(Check.check(this.user, this.comp));
            this.askToEndGame();
        }
        ;
        console.log('Game over');
    }
    ;
    askToEndGame() {
        const input = prompt('Press to "y" to continue playing?');
        this.isOver = input !== 'y' ? true : false;
    }
    ;
}
;
class Check {
    static check(user, comp) {
        var _a;
        if (user.getChoice().name === comp.getChoice().name) {
            return 'Draw!' + '\n' + '***************';
        }
        ;
        const ifUserWins = (_a = user.getChoice()) === null || _a === void 0 ? void 0 : _a.checkIfWinning(comp.getChoice().name);
        return ifUserWins ? 'User wins!' + '\n' + '***************' : 'Computer wins!' + '\n' + '***************';
    }
    ;
}
;
const game = new Game(new User, new Comp);
game.init();
//# sourceMappingURL=index.js.map