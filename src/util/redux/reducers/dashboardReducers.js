import { TAB_DATA,ACTIVE_CLASS_DATA } from "../../../modules/Dashboard/actions";

const initialState = {
  navBarTabData: [],
  activeClassData:[]
};

export const dashBoard = (state = initialState, action) => {
  switch (action.type) {
    case TAB_DATA:
      return {
        ...state,
        navBarTabData: action.payload
      };
    case ACTIVE_CLASS_DATA:
      return {
        ...state,
        activeClassData: action.payload
      };
    default:
      return state;
  }
};
