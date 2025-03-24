import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from '../Actions/taskActions';

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    
    case TOGGLE_TASK:
      return state.map(task => 
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    
    default:
      return state;
  }
};

export default taskReducer;
