import StartScreen from './StartScreen';
import { GAME_STATUS } from '../constants';
import { createTestPlayers } from '../../../test/helpers';
describe('StartScreen', () => {

  const renderStartScreen = (players) => {
    const $el = document.createElement('div');
    const events = { startGame: jest.fn() };
    const props = {
      status: GAME_STATUS.IN_PROGRESS,
      players,
      currentPlayerIndex: 0
    }
    const startScreen = new StartScreen($el, props, events);
    startScreen.render();
    const startButton = $el.querySelector('#startBtn');
    const simulateButton = $el.querySelector('#simulateBtn');
    return {
      startButton,
      simulateButton,
      events
    }
  }

  it('clicking start game should start human v computer game', () => {
    const players = createTestPlayers();
    const { startButton, events } = renderStartScreen(players);
    startButton.click();
    const expectedPlayers = [
      {
        name: 'Player 1',
        isCPU: false,
        choice: undefined,
      },
      {
        name: 'Player 2',
        isCPU: true,
        choice: undefined,
      }
    ];
    expect(events.startGame).toBeCalledWith(expect.arrayContaining(expectedPlayers));
  });

  it('clicking simulate game should start computer v computer game', () => {
    const players = createTestPlayers();
    const { simulateButton, events } = renderStartScreen(players);
    simulateButton.click();
    const expectedPlayers = [
      {
        name: 'Player 1',
        isCPU: true,
        choice: undefined,
      },
      {
        name: 'Player 2',
        isCPU: true,
        choice: undefined,
      }
    ];
    expect(events.startGame).toBeCalledWith(expect.arrayContaining(expectedPlayers));
  });

});
