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
      <h2>Select an option</h2>
      <div class="controls">
        <button id="startBtn">
          <div><i class="fas fa-3x fa-user"></i> v <i class="fas fa-3x fa-desktop"></i></div>
          <div class="text">Start Game</div>
        </button>
        <button id="simulateBtn">
          <i class="fas fa-3x fa-desktop"></i> v <i class="fas fa-3x fa-desktop"></i>
          <div class="text">Simulate</div>
        </button>
      </div>
    </div>
    `
  }
}
