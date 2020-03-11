export const createTestPlayer = (name, choice) => {
    return {
      name,
      isCPU: false,
      choice
    }
  }

  export const createTestPlayers = () => (
    [createTestPlayer('p1'), createTestPlayer('p2')]
  );

  export const getIconText = (container) => container.querySelector('.fa-layers-text').textContent;