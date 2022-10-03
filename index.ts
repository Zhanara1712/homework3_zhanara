// enum Choice {
//     STONE = 'stone',
//     SCISSORS = 'scissors',
//     PAPER = 'paper'
// }

class GameElement {
    public name: string = '';
    checkIfWinning(choice: string): boolean {
        return true;
    }
};

class Stone extends GameElement {
    public name: string = 'stone';
    public static checkIfWinning(choice: string) {
        return choice.toLowerCase() === 'scissors';
    };
};

class Scissors extends GameElement {
    public name: string = 'scissors';
    public static checkIfWinning(choice: string) {
        return choice.toLowerCase() === 'paper';
    };
};

class Paper extends GameElement {
    public name: string = 'paper';
    public static checkIfWinning(choice: string) {
        return choice.toLowerCase() === 'stone';
    };
};

class Player {
    public makeChoice: Function | null;
    protected _choice: GameElement | null;
    constructor() {
        this.makeChoice = null;
        this._choice = null;
    };

    public getChoice(): GameElement | null {
        return this._choice;
    };
    protected setChoice(choice: GameElement) {
        this._choice = choice;
    };
};

class User extends Player {
    constructor() {
        super();
    };
    makeChoice = (): void => {
        // let input: string | null = prompt('Make your choice:' + '\n' + '1 - Stone' + '\n' + '2 - Scissors' + '\n' + '3 - Paper');
         
        const move = document.getElementById('move')
        const stoneBtn = document.getElementById('stone')
        const scissorsBtn = document.getElementById('scissors')
        const paperBtn = document.getElementById('paper')
        stoneBtn?.addEventListener('click', ()=> {
            this.setChoice(Stone);
            console.log(`User choose ${this.getChoice()!.name}`);
        })
        scissorsBtn?.addEventListener('click', ()=> {
            this.setChoice(Scissors);
            console.log(`User choose ${this.getChoice()!.name}`);
        })
        paperBtn?.addEventListener('click', ()=> {
            this.setChoice(Paper);
             console.log(`User choose ${this.getChoice()!.name}`);
        })
      
       
    };
};

class Comp extends Player {
    constructor() {
        super();
    }
    makeChoice = (): void => {
        const btn = document.getElementById('stone');
        btn?.addEventListener('click', ()=> {
            const random: number = Math.ceil(Math.random() * 3);
            switch(random) {
                case 1:
                    this.setChoice(Stone);
                    break;
                case 2:
                    this.setChoice(Scissors);
                    break;
                case 3:
                    this.setChoice(Paper);
                    break;
            };
            console.log(`Computer choose ${this.getChoice()!.name}`);
        })
        
    };
};

class Game {
    private isOver: boolean;
    private user: User;
    private comp: Comp;
    constructor(user: User, comp: Comp) {
        this.user = user;
        this.comp = comp;
        this.isOver = false;
    };
    init(): void {
        while(!this.isOver) {
            this.user.makeChoice();
            this.comp.makeChoice();
            console.log(Check.check(this.user, this.comp));
            this.askToEndGame();
        };
        console.log('Game over');
    };
    askToEndGame() {
        const input: string | null = prompt('Press to "y" to continue playing?');
        this.isOver = input !== 'y' ? true : false ;
    };
};

class Check {
    public static check(user: User, comp: Comp): string {           
        if (user.getChoice()!.name === comp.getChoice()!.name) {
            return 'Draw!'+ '\n' + '***************';
        };       
        const ifUserWins: boolean| undefined = user.getChoice()?.checkIfWinning(comp.getChoice()!.name)        
        return ifUserWins ? 'User wins!' + '\n' + '***************' : 'Computer wins!'+ '\n' + '***************';             
    };   
};
const game = new Game(new User, new Comp);
game.init();

