import ResultsPanel from './ResultsPanel';
import { ROCK, PAPER, SCISSORS, GAME_STATUS } from '../constants';
import { createTestPlayers } from '../../../test/helpers';
describe('GameStatusPanel', () => {

  const renderResultsPanel = (players, status = GAME_STATUS.IN_PROGRESS) => {
    const $el = document.createElement('div');
    const props = {
      status,
      players,
      currentPlayerIndex: 0
    }
    const resultsPanel = new ResultsPanel($el, props);
    resultsPanel.render();
    return {
      $el,
      resultsPanel
    }
  };

  it('should render nothing if game in progress', () => {
    const players = createTestPlayers();
    const { $el } = renderResultsPanel(players);
    expect($el.innerHTML).toEqual('');
  });

  it('should display tie message if game is a tue', () => {
    const players = createTestPlayers();
    const { $el } = renderResultsPanel(players, GAME_STATUS.TIE);
    expect($el.innerHTML).toEqual(expect.stringContaining(`It's a tie!!`));
  });

  it('should display PLAYER1 winning message if player 1 wins', () => {
    const players = createTestPlayers();
    const { $el } = renderResultsPanel(players, GAME_STATUS.PLAYER1_WIN);
    expect($el.innerHTML).toEqual(expect.stringContaining(`p1 wins!!`));
  });

  it('should display PLAYER2 winning message if player 2 wins', () => {
    const players = createTestPlayers();
    const { $el } = renderResultsPanel(players, GAME_STATUS.PLAYER2_WIN);
    expect($el.innerHTML).toEqual(expect.stringContaining(`p2 wins!!`));
  });

  it('should display winning reason if player 1 wins', () => {
    const players = createTestPlayers();
    players[0].choice = ROCK;
    players[1].choice = SCISSORS;
    const { $el } = renderResultsPanel(players, GAME_STATUS.PLAYER1_WIN);
    expect($el.innerHTML).toEqual(expect.stringContaining(`Rock beats Scissors`));
  });

  it('should display winning reason if player 2 wins', () => {
    const players = createTestPlayers();
    players[0].choice = PAPER;
    players[1].choice = SCISSORS;
    const { $el } = renderResultsPanel(players, GAME_STATUS.PLAYER2_WIN);
    expect($el.innerHTML).toEqual(expect.stringContaining(`Scissors beats Paper`));
  });

});
