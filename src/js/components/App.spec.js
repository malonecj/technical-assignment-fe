import App from './App';

describe('App', () => {

  const renderApp = () => {
    const $el = document.createElement('div');
    return {
      app: new App($el),
      $el
    }
  }

  it('should render a start screen on initialisation', () => {
    const { $el } = renderApp();
    const startScreen = $el.querySelector('.start-screen')
    expect(startScreen.innerHTML).toEqual(expect.stringContaining("Select an option"));
  });
});
