export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      band = {
        id:  Math.random()*10000000000000000,
        name: action.name
      };
      return { ...state, bands: [...state.bands, band] }
    case 'ADD_BAND':

      return {bands: state.bands.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
};
