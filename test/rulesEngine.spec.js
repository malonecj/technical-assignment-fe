import { OPTIONS, GAME_OUTCOMES } from '../src/js/constants';
const { ROCK, PAPER, SCISSORS } = OPTIONS;
import { determineWinner } from '../src/js/rulesEngine';

describe('Rules Engine', () => {

  describe('determineWinnner', () => {
    it('rock beats scissors', () => {
      const outcome = determineWinner(ROCK, SCISSORS);
      expect(outcome).toBe(GAME_OUTCOMES.PLAYER1_WIN);
    });

    it('scissors beats paper', () => {
      const outcome = determineWinner(PAPER, SCISSORS);
      expect(outcome).toBe(GAME_OUTCOMES.PLAYER2_WIN);
    });

    it('paper beats rock', () => {
      const outcome = determineWinner(PAPER, ROCK);
      expect(outcome).toBe(GAME_OUTCOMES.PLAYER1_WIN);
    });

    it('returns a tie if both players make same choice', () => {
      const outcome = determineWinner(PAPER, PAPER);
      expect(outcome).toBe(GAME_OUTCOMES.TIE);
    });
  });

});
