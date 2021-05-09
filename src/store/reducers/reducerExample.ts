const INITIAL_STATE = {
  myState: '',
};

export default function reducerExample(state = INITIAL_STATE, action) {
  if (action.type === 'SET_MY_STATE') {
    return {
      ...state,
      activeLesson: action.myState,
    };
  }

  return state;
}
