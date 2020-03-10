import SimpleComponent from './SimpleComponent';

const createPlayers = ({ isSimulated }) => {
  const player1 = {
    name: 'Player 1',
    isCPU: isSimulated,
    choice: undefined,
  };
  const player2 = {
    name: 'Player 2',
    isCPU: true,
    choice: undefined,
  }
  return [player1, player2];
}

export default class StartScreen extends SimpleComponent {

  constructor(container, props, events) {
    super(container, props, events);
    this.startGame = this.startGame.bind(this);
    this.simulateGame = this.simulateGame.bind(this);
  }

  startGame() {
    const players = createPlayers({ isSimulated: false });
    this.events.startGame(players);
  }

  simulateGame() {
    const players = createPlayers({ isSimulated: true });
    this.events.startGame(players);
  }

  bindEventListeners() {
    const startBtn = this.container.querySelector('#startBtn');
    const simulateBtn = this.container.querySelector('#simulateBtn');
    startBtn.addEventListener('click', this.startGame);
    simulateBtn.addEventListener('click', this.simulateGame);
  }

  template() {
    return `
    <div class="start-screen">
      <h2>Choose your game type</h2>
      <button id="startBtn">Start Game (You v Computer)</button>
      <button id="simulateBtn">Simulate Game (Computer v Computer)</button>
    </div>
    `
  }
}
