export default function rootReducer(
  currentState = {
    projects: ''
  },
  action
) {
  switch (action.type) {
    case 'GET_ALL_PROJECTS':
      return { ...currentState, projects: action.projects };

    default:
      return currentState;
  }
}
