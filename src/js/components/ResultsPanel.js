import SimpleComponent from './SimpleComponent';
import { GAME_STATUS } from '../constants';

import './ResultsPanel.scss';

export default class ResultsPanel extends SimpleComponent {

  shouldDisplay() {
    const { TIE, PLAYER1_WIN, PLAYER2_WIN } = GAME_STATUS;
    return [TIE, PLAYER1_WIN, PLAYER2_WIN].indexOf(this.props.status) > -1;
  }

  getWinner() {
    const { players, status } = this.props;
    if (status === GAME_STATUS.PLAYER1_WIN) {
      return { winner: players[0], loser: players[1] };
    }
    if (status === GAME_STATUS.PLAYER2_WIN) {
      return { winner: players[1], loser: players[0] };
    }
  }

  getResultMessage() {
    let message = '';
    let reason = '';
    if (this.props.status === GAME_STATUS.TIE) {
      message = `It's a tie!!`;
    } else {
      const { winner, loser } = this.getWinner();
      message = `${winner.name} wins!!`;
      reason = `${winner.choice} beats ${loser.choice}`;
    }
    return { message, reason };
  }

  template() { 
    if(this.shouldDisplay()) {
      const { message, reason } = this.getResultMessage();
      return `
      <div class="results-panel">
        <h2>${message}</h2>
        <h3>${reason}</h3>
      </div>
      `
    }
    return null;
  }
}
