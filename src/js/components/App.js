import WeaponPanel from './WeaponPanel';

class App {

  constructor() {
    this.state = {
      player1Choice: undefined,
      player2Choice: undefined,
      currentTurn: 'player1'
    }
    this.createWeaponPanel();
    this.render();
  }

  onWeaponChosen(weapon) {
    console.log(weapon);
  }

  createWeaponPanel() {
    const $el = document.getElementById('weaponPanel');
    const props = {
      ...this.state,
      onWeaponChosen: this.onWeaponChosen
    }
    this.weaponPanel = new WeaponPanel($el, props);
  }

  render() {
    this.weaponPanel.render();
  }
}

export default App;