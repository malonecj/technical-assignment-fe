import SimpleComponent from './SimpleComponent';
import WeaponIcon from './WeaponIcon';

import './GameStatus.scss';

const PlayerChoice = (player) => {
  const icon = player.choice ? `hand-${player.choice}` : `question`;
  return `
  <div class="player-choice">
    ${WeaponIcon({ icon, text: player.choice })}
    <span class="name">${player.name}</span>
  </div>`
}

export default class GameStatus extends SimpleComponent {

  bindEventListeners() {
    const restartBtn = this.container.querySelector('#restartBtn');
    restartBtn.addEventListener('click', this.events.restartGame);
  }

  template() {
    return `
    <div>
      <div class="game-status">
        ${this.props.players.map(p => PlayerChoice(p)).join('')}
      </div>
      <div class="toolbar">
        <button id="restartBtn">Restart Game</button>
      </div>
    </div>
    `
  }
}
