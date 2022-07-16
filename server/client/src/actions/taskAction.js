export const getAllTasks =() => async (dispatch) =>{
    try {
        const token = localStorage.getItem("token");
        const res = await fetch('/getAllTasks',{
            method: "GET",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        const data = await res.json()
        dispatch({ type: 'GET_ALL_TASKS', payload: data });
  
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
}

export const addTask =(title, description) => async (dispatch) =>{
    try {
        const token = localStorage.getItem("token");
        const res = await fetch('/addTask',{
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body:  JSON.stringify({title, description})
        })
        const data = await res.json()
        dispatch({ type: 'GET_ALL_TASKS', payload: data });
  
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
}

export const editTask =(id, title, description) => async (dispatch) =>{
    try {
        console.log('hiii')
        const token = localStorage.getItem("token");
        const res = await fetch(`/editTask/${id}`,{
            method: "PUT",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body:  JSON.stringify({title, description})
        })
        const data = await res.json()
        dispatch({ type: 'GET_ALL_TASKS', payload: data });
  
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
}

export const deleteTask =(id) => async (dispatch) =>{
    try {
        const token = localStorage.getItem("token");
        const res = await fetch(`/deleteTask/${id}`,{
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        const data = await res.json()
        dispatch({ type: 'GET_ALL_TASKS', payload: data });
  
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
}