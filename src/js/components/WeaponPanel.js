import SimpleComponent from './SimpleComponent';
import { GAME_STATUS, KEYPRESS_ENTER } from '../constants';
import { getWeapons } from '../rulesEngine';
import Icon from './WeaponIcon';

const Weapon = (name) => `
  <li tabIndex="0" role="button" class="weapon-btn ${name}" data-weapon="${name}">
    ${Icon({ icon: `hand-${name}`, text: name })}
</li>`;

const CPUTurn = player => `
  <div class="cpu-turn">
    <i class="fas fa-cog fa-6x fa-spin"></i>
    <h4>${player.name} is thinking</h4>
  </div>
`

const HumanTurn = () => {
  return (`
    <ul>
      ${getWeapons().map((name, i) => Weapon(name, i + 1)).join('')}
    </ul>
  `);
}

export default class WeaponPanel extends SimpleComponent {

  constructor(container, props, events) {
    super(container, props, events);
    this.chooseWeapon = this.chooseWeapon.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  chooseWeapon(event) {
    const choice = event.target.dataset.weapon;
    if (getWeapons().indexOf(choice) > -1) {
      this.events.onWeaponChosen(choice);
    }
  }

  onKeyDown(event) {
    if (event.keyCode === KEYPRESS_ENTER) {
      this.chooseWeapon(event);
    }
  }

  bindEventListeners() {
    this.container.addEventListener('click', this.chooseWeapon);
    this.container.addEventListener("keydown", this.onKeyDown); 
  }

  getCurrentPlayer() {
    const { players, currentPlayerIndex } = this.props;
    return players[currentPlayerIndex];
  }

  template() {
    const currentPlayer = this.getCurrentPlayer();
    return `<div class="weapon">
    <div class="weapon-inner">
        <h3>${currentPlayer.name}: Your turn</h3>
          ${currentPlayer.isCPU ? CPUTurn(currentPlayer) : HumanTurn(currentPlayer)}
    </div>
  </div>`
  }

  afterRender() {
    if (this.getCurrentPlayer().isCPU && this.props.status === GAME_STATUS.IN_PROGRESS) {
      setTimeout(this.simulateCPUTurn.bind(this), 2000);
    }
  }

  simulateCPUTurn() {
    const weaponChoices = getWeapons();
    const choice = weaponChoices[Math.floor(Math.random() * weaponChoices.length)];
    this.events.onWeaponChosen(choice);
  }

}

