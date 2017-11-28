import * as actionTypes from '../constants/actionTypes';

// TODO REMOVE REDUCER AS IT HAS NO PURPOSE
const answersReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SURVEY_LOAD_SUCCESS: {
      const {answers} = action.payload.entities;
      return {
        ...answers
      };
    }

    case actionTypes.SURVEY_RESET: {
      return {}
    }

    default: {
      return state;
    }
  }
};

export default answersReducer;