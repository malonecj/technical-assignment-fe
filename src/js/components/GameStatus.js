import SimpleComponent from './SimpleComponent';
import WeaponIcon from './WeaponIcon';

export default class GameStatus extends SimpleComponent {

  bindEventListeners() {
    const restartBtn = this.container.querySelector('#restartBtn');
    restartBtn.addEventListener('click', this.events.restartGame);
  }

  template() {
    return `
    <div>
      <div class="game-status">
        ${this.props.players.map(p => {
          const icon = p.choice ? `hand-${p.choice}` : `question`;
          return WeaponIcon({icon, text: p.name});
        })}
      </div>
      <div class="toolbar">
        <button id="restartBtn">Restart Game</button>
      </div>
    </div>
    `
  }
}
