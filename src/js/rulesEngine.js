import { ROCK, PAPER, SCISSORS, GAME_STATUS } from './constants';

const rules = {
  [ROCK]: { beats: [SCISSORS] },
  [PAPER]: { beats: [ROCK] },
  [SCISSORS]: {beats: [PAPER] }
}

export function addRule(name, defeats) {
  const defeatableOptions = Array.isArray(defeats) ? defeats : [defeats];
  if(rules[name]) {
    rules[name].beats = [...rules[name].beats, ...defeatableOptions];
  } else {
    rules[name] = { beats: defeatableOptions };
  }
}

export function determineWinner(player1Choice, player2Choice) {
  if(player1Choice === player2Choice) {
    return GAME_STATUS.TIE;
  }
  else if(rules[player1Choice].beats.includes(player2Choice)) {
    return GAME_STATUS.PLAYER1_WIN;
  }
  else if(rules[player2Choice].beats.includes(player1Choice)) {
    return GAME_STATUS.PLAYER2_WIN;
  }
  throw new Error("No winner could be determined");
}

export function getWeapons() {
  return Object.getOwnPropertyNames(rules);
}