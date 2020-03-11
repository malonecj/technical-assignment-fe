import WeaponIcon from './WeaponIcon';

describe('WeaponIcon', () => {

  it('should render an icon', () => {
    const weaponIcon = WeaponIcon({ icon: 'hand-rock', text: 'rock' });
    expect(weaponIcon).toEqual(expect.stringContaining(`<i class="fas fa-hand-rock fa-stack-1x fa-inverse"></i>`));
  });

});
