import WeaponPanel from './WeaponPanel';
import { ROCK, PAPER, SCISSORS, GAME_STATUS } from '../constants';
import { createTestPlayers, getIconText } from '../../../test/helpers';
describe('WeaponPanel', () => {

  const renderWeaponPanel = (players, otherProps) => {
    const $el = document.createElement('div');
    const events = { onWeaponChosen: jest.fn() };
    const props = {
      status: GAME_STATUS.IN_PROGRESS,
      players,
      currentPlayerIndex: 0,
      ...otherProps
    }
    const weaponPanel = new WeaponPanel($el, props, events);
    weaponPanel.render();
    const weaponButtons = $el.querySelectorAll('.weapon-btn');
    return {
      $el,
      weaponPanel,
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

  it('clicking rock button should trigger rock chosen event', () => {
    const players = createTestPlayers();
    const { weaponButtons, events } = renderWeaponPanel(players);
    const rockWeapon = weaponButtons[0];
    rockWeapon.click();
    expect(events.onWeaponChosen).toBeCalledWith(ROCK);
  });

  it('clicking paper button should trigger paper chosen event', () => {
    const players = createTestPlayers();
    const { weaponButtons, events } = renderWeaponPanel(players);
    const paperWeapon = weaponButtons[1];
    paperWeapon.click();
    expect(events.onWeaponChosen).toBeCalledWith(PAPER);
  });

  it('clicking scissors button should trigger scissors chosen event', () => {
    const players = createTestPlayers();
    const { weaponButtons, events } = renderWeaponPanel(players);
    const scissorsWeapon = weaponButtons[2];
    scissorsWeapon.click();
    expect(events.onWeaponChosen).toBeCalledWith(SCISSORS);
  });

  it('pressing enter on a weapon should triger weapon event', () => {
    const players = createTestPlayers();
    const { weaponButtons, events } = renderWeaponPanel(players);
    const scissorsWeapon = weaponButtons[2];
    scissorsWeapon.click();
    scissorsWeapon.dispatchEvent(new Event('focus'));
    scissorsWeapon.dispatchEvent(new KeyboardEvent('keypress',{'key':'a'}));
    expect(events.onWeaponChosen).toBeCalledWith(SCISSORS);
  });

  it('should display loading indicator for CPU turn', async () => {
    const players = createTestPlayers();
    players[1].isCPU = true;
    const { $el } = await renderWeaponPanel(players, { currentPlayerIndex: 1 });
    const display = $el.querySelector('.cpu-turn');
    expect(display.innerHTML).toEqual(expect.stringContaining('p2 is thinking'))
  });


});
