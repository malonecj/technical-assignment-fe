import WeaponPanel from './WeaponPanel';
import GameStatus from './GameStatus';
import ResultsPanel from './ResultsPanel';
import StartScreen from './StartScreen';
import { GAME_STATUS } from '../constants'; 
import { determineWinner } from '../rulesEngine';

class App {

  constructor() {
    this.state = {
      currentPlayerIndex: 0,
      status: GAME_STATUS.NOT_STARTED,
    }
    this.createStartScreen();
    this.render();
  }

  onWeaponChosen(weapon) {
    const { players, currentPlayerIndex } = this.state;
    players[currentPlayerIndex].choice = weapon;
    if(currentPlayerIndex === 0) {
      this.state.currentPlayerIndex +=1;  
    } else {
      this.state.status = determineWinner(players[0].choice, players[1].choice);
    }
    this.render();
  }

  createStartScreen() {
    const $el = document.getElementById('startScreen');
    this.startScreen= new StartScreen($el, this.state, { startGame: this.startGame.bind(this) });
  }

  createWeaponPanel() {
    const $el = document.getElementById('weaponPanel');
    this.weaponPanel = new WeaponPanel($el, this.state, { onWeaponChosen: this.onWeaponChosen.bind(this) });
  }

  createGameStatus() {
    const $el = document.getElementById('gameStatus');
    this.gameStatus = new GameStatus($el, this.state);
  }

  createResultsPanel() {
    const $el = document.getElementById('resultsPanel');
    this.resultsPanel = new ResultsPanel($el, this.state);
  }

  startGame(players) {
    this.state.players = players;
    this.state.status = GAME_STATUS.IN_PROGRESS;
    this.createWeaponPanel();
    this.createGameStatus();
    this.createResultsPanel();
    this.render();
  }

  renderStartScreen() {
    this.startScreen.render();
    this.weaponPanel.hide();
    this.gameStatus.hide();
    this.resultsPanel.hide();
  }

  renderGameScreen() {
    this.weaponPanel.render();
    this.gameStatus.render();
    this.resultsPanel.render();
    this.startScreen.hide();
  }

  render() {
    if(this.state.status === GAME_STATUS.NOT_STARTED) {
      this.renderStartScreen();
    } else {
      this.renderGameScreen();
    }
  }
}

export default App;