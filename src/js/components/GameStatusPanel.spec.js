import GameStatusPanel from './GameStatusPanel';
import { ROCK } from '../constants';

describe('GameStatusPanel', () => {

  const createTestPlayer = (name, choice) => {
    return {
      name,
      isCPU: false,
      choice
    }
  }

  const createTestPlayers = () => [createTestPlayer('p1'), createTestPlayer('p2')]


    it('should render player1s choice', () => {
      const $el = document.createElement('div');
      const players = createTestPlayers();
      players[0].choice = ROCK;
      const gameStatusPanel = new GameStatusPanel($el, { players});
      gameStatusPanel.render();
      const playerChoices = $el.querySelectorAll('.player-choice');
      expect(playerChoices.length).toEqual(1);
    });


});
