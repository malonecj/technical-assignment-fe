import { ROCK, PAPER, SCISSORS, GAME_STATUS } from './constants';
import { determineWinner, addRule, getWeapons } from './rulesEngine';

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

  describe('adding more rules', () => {
    it('should be able to add new rules', () => {
      addRule('Lizard', 'Spock');
      const outcome = determineWinner('Lizard', 'Spock');
      expect(outcome).toBe(GAME_STATUS.PLAYER1_WIN);
    });

    it('adding rule should add to weapon list', () => {
      addRule('Lizard', 'Spock');
      addRule('Spock', SCISSORS);
      const weapons = getWeapons();
      expect(weapons).toEqual([ROCK, PAPER, SCISSORS, 'Lizard', 'Spock']);
    });
  });

});
