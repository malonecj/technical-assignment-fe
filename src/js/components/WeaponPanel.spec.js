import WeaponPanel from './WeaponPanel';
import { ROCK, PAPER, SCISSORS, GAME_STATUS } from '../constants';
import { createTestPlayers, getIconText } from '../../../test/helpers';
describe('GameStatusPanel', () => {

  const renderWeaponPanel = (players) => {
    const $el = document.createElement('div');
    const events = { onWeaponChosen: jest.fn() };
    const props = {
      status: GAME_STATUS.IN_PROGRESS,
      players,
      currentPlayerIndex: 0
    }
    const gameStatusPanel = new WeaponPanel($el, props, events);
    gameStatusPanel.render();
    const weaponButtons = $el.querySelectorAll('.weapon-btn');
    return {
      gameStatusPanel,
      weaponButtons,
      events
    }
  }

  it('should render a weapon for each weapon choice', () => {
    const players = createTestPlayers();
    const { weaponButtons } = renderWeaponPanel(players);
    expect(weaponButtons.length).toEqual(3);
    expect(getIconText(weaponButtons[0])).toEqual(ROCK);
    expect(getIconText(weaponButtons[1])).toEqual(PAPER);
    expect(getIconText(weaponButtons[2])).toEqual(SCISSORS);
  });

  it('clicking rock button should triiger rock chosen event', () => {
    const players = createTestPlayers();
    const { weaponButtons, events } = renderWeaponPanel(players);
    const rockWeapon = weaponButtons[0];
    rockWeapon.click();
    expect(events.onWeaponChosen).toBeCalledWith(ROCK);
  });

  it('clicking paper button should triiger paper chosen event', () => {
    const players = createTestPlayers();
    const { weaponButtons, events } = renderWeaponPanel(players);
    const paperWeapon = weaponButtons[1];
    paperWeapon.click();
    expect(events.onWeaponChosen).toBeCalledWith(PAPER);
  });

  it('clicking scissors button should triiger scissors chosen event', () => {
    const players = createTestPlayers();
    const { weaponButtons, events } = renderWeaponPanel(players);
    const scissorsWeapon = weaponButtons[2];
    scissorsWeapon.click();
    expect(events.onWeaponChosen).toBeCalledWith(SCISSORS);
  });

});
