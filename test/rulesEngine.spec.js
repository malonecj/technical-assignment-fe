import { ROCK, PAPER, SCISSORS, GAME_STATUS } from '../src/js/constants';
import { determineWinner } from '../src/js/rulesEngine';

describe('Rules Engine', () => {

  describe('determineWinnner', () => {
    it('rock beats scissors', () => {
      const outcome = determineWinner(ROCK, SCISSORS);
      expect(outcome).toBe(GAME_STATUS.PLAYER1_WIN);
    });

    it('scissors beats paper', () => {
      const outcome = determineWinner(PAPER, SCISSORS);
      expect(outcome).toBe(GAME_STATUS.PLAYER2_WIN);
    });

    it('paper beats rock', () => {
      const outcome = determineWinner(PAPER, ROCK);
      expect(outcome).toBe(GAME_STATUS.PLAYER1_WIN);
    });

    it('returns a tie if both players make same choice', () => {
      const outcome = determineWinner(PAPER, PAPER);
      expect(outcome).toBe(GAME_STATUS.TIE);
    });
  });

});
