import './WeaponPanel.scss';
import '@fortawesome/fontawesome-free/js/all';
import SimpleComponent from './SimpleComponent';
import { WEAPON_CHOICES } from '../constants';

const Weapon = (name) => `
  <li role="button" data-weapon="${name}">
    <span class="fa-stack fa-7x">
      <i class="fas fa-circle fa-stack-2x"></i>
      <i class="fas fa-hand-${name.toLowerCase()} fa-stack-1x fa-inverse"></i>
      <span class="fa-layers-text fa-inverse" data-fa-transform="rotate--180 shrink-20 down-10" >${name}</span>
    </span>
</li>`;

export default class WeaponPanel extends SimpleComponent {

  bindEventListeners() {
    this.container.addEventListener('click', (event) => {
      const choice = event.target.dataset.weapon;
      if(WEAPON_CHOICES.indexOf(choice) > -1) {
        this.props.onWeaponChosen(choice)
      }
    })
  }

  template() {
    return `<div class="weapon">
    <div class="weapon-inner">
        <h3>Player1: Make your move</h3>
        <ul>
            ${WEAPON_CHOICES.map(name => Weapon(name, this.props.player)).join('')}
        </ul>
    </div>
  </div>`
  }

}

