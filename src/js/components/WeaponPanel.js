import './WeaponPanel.scss';
import SimpleComponent from './SimpleComponent';
import { WEAPON_CHOICES, GAME_STATUS } from '../constants';
import Icon from './WeaponIcon';

const Weapon = name => `
  <li role="button" data-weapon="${name}">
    ${Icon({ icon: `hand-${name}`, text: name })}
</li>`;

const CPUTurn = player => `
  <div>
    <h4>${player.name} is thinking</h4>
    <i class="fas fa-cog fa-spin"></i>
  </div>
`

const HumanTurn = player => WEAPON_CHOICES.map(name => Weapon(name, player)).join('');

export default class WeaponPanel extends SimpleComponent {

  constructor(container, props, events) {
    super(container, props, events);
    this.chooseWeapon = this.chooseWeapon.bind(this);
  }

  chooseWeapon(event) {
    const choice = event.target.dataset.weapon;
    if (WEAPON_CHOICES.indexOf(choice) > -1) {
      this.events.onWeaponChosen(choice);
    }
  }

  bindEventListeners() {
    this.container.addEventListener('click', this.chooseWeapon);
  }

  getCurrentPlayer() {
    const { players, currentPlayerIndex } = this.props;
    return players[currentPlayerIndex];
  }

  template() {
    const currentPlayer = this.getCurrentPlayer();
    return `<div class="weapon">
    <div class="weapon-inner">
        <h3>${currentPlayer.name}: Make your move</h3>
        <ul>
          ${currentPlayer.isCPU ? CPUTurn(currentPlayer) : HumanTurn(currentPlayer)}
        </ul>
    </div>
  </div>`
  }

  afterRender() {
    if (this.getCurrentPlayer().isCPU && this.props.status === GAME_STATUS.IN_PROGRESS) {
      setTimeout(this.simulateCPUTurn.bind(this), 3000);
    }
  }

  simulateCPUTurn() {
    const choice = WEAPON_CHOICES[Math.floor(Math.random() * WEAPON_CHOICES.length)];
    this.events.onWeaponChosen(choice);
  }

}

