import SimpleComponent from './SimpleComponent';
import WeaponIcon from './WeaponIcon';

export default class GameStatus extends SimpleComponent {

  template() {
    return `
    <div class="game-status">
      ${this.props.players.map(p => {
        const icon = p.choice ? `hand-${p.choice}` : `question`;
        return WeaponIcon({icon, text: p.name});
      })}
    </div>
    `
  }
}
