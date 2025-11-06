// src/services/PanelService.js
const getPanels = () => {
  return fetch('/paineis.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao carregar paineis.json');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching panels:', error);
      return [];
    });
};

const PanelService = { getPanels };

export default PanelService;
