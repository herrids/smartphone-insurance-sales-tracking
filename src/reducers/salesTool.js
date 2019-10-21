import {UPDATE_NEW_SALE, SAVE_CHANGES, EDIT_ITEM, DELETE_ITEM, INVALID_INPUT, GET_SMARTPHONES_SUCCESS} from "../actions/salesTool";
  
  const emptyForm = {
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    smartphone: ""
  }

  const defaultState = {
    item: emptyForm,
    sales: [],
    salesData: []
  };
  
  const salesToolReducer = (state = defaultState, action) => {
    let newState = state;
  
    switch (action.type) {
      case GET_SMARTPHONES_SUCCESS:
        newState = Object.assign({}, state, {
          smartphones: action.smartphones,
          salesData: action.salesData
        });
        break
      case INVALID_INPUT:
        newState = Object.assign({}, state, {
          invalidInput: true,
        });
        break
      case UPDATE_NEW_SALE:
        newState = Object.assign({}, state, {
          item: Object.assign({}, action.item),
        });
        break;
      case SAVE_CHANGES:       
        newState = Object.assign({}, state, {
          sales: action.salesCopy,
          salesData: action.salesDataCopy,
          item: emptyForm,
          invalidInput: false
        });
        break;
      case EDIT_ITEM:
        newState = Object.assign({}, state, {
          item: action.item,
        });
        break;
      case DELETE_ITEM:
        newState = Object.assign({}, state, {
          sales: action.salesCopy,
          salesData: action.salesDataCopy
        });
        break
  }
  
    return newState;
  };
  
  export default salesToolReducer;
  