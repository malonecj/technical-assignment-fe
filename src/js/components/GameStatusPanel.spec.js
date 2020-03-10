import GameStatusPanel from './GameStatusPanel';
import { ROCK, PAPER } from '../constants';
import { createTestPlayers, getIconText } from '../../../test/helpers';

describe('GameStatusPanel', () => {

  const renderGameStatusPanel = (players) => {
    const $el = document.createElement('div');
    const events = { restartGame: jest.fn() };
    const gameStatusPanel = new GameStatusPanel($el, { players }, events);
    gameStatusPanel.render();
    const playerChoices = $el.querySelectorAll('.player-choice');
    const restartButton = $el.querySelector('button');
    return {
      gameStatusPanel,
      playerChoices,
      restartButton,
      events
    }
  }


  it('should render player1s choice', () => {
    const players = createTestPlayers();
    players[0].choice = ROCK;
    const { playerChoices } = renderGameStatusPanel(players);
    expect(playerChoices.length).toEqual(2);
    expect(getIconText(playerChoices[0])).toEqual(ROCK);
  });

  it('should render player2s choice', () => {
    const players = createTestPlayers();
    players[0].choice = ROCK;
    players[1].choice = PAPER;
    const { playerChoices } = renderGameStatusPanel(players);
    expect(playerChoices.length).toEqual(2);
    expect(getIconText(playerChoices[1])).toEqual(PAPER);
  });

  it('click restart should restart game', () => {
    const players = createTestPlayers();
    const { events, restartButton } = renderGameStatusPanel(players);
    restartButton.click();
    expect(events.restartGame).toBeCalledTimes(1);
  });
});
