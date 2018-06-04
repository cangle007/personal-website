export default function rootReducer(
  currentState = {
    logoImages: []
  },
  action
) {
  switch (action.type) {
    case 'GET_LOGOS_SUCCESS':
      return { ...currentState, logoImages: action.logoImages };

    default:
      return currentState;
  }
}
