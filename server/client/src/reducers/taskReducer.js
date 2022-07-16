
export const taskReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_ALL_TASKS':
        return { type:'getAllTasks' , data:action.payload };
      case 'ADD_TASK':
        return {type:'addTask' , data:action.payload};
      default:
        return state;
    }
  };
  