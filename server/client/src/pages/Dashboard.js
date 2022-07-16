import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addTask, getAllTasks } from '../actions/taskAction';
import TaskCard from '../componenets/TaskCard';

function Dashboard() {
  const userLogin = useSelector((state) => state.userLoggedInReducer);
  const task = useSelector((state) => state.taskReducer);
  const {user}= userLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const refClose = useRef(null);
  const [taskDetails, setTaskDetails] = useState({title:'', description:''})

  const handleInput=(e)=>{
    setTaskDetails({...taskDetails, [e.target.name]: e.target.value})
  }

  const handleSave=()=>{
    dispatch(addTask(taskDetails.title, taskDetails.description))
    refClose.current.click()

  }

  if(user && task.type !== 'getAllTasks'){
    dispatch(getAllTasks())
  }

  const handleAdd=()=>{

  }
  
  useEffect(() => {
    if(!user){
      navigate('/')
    }
    console.log(task.data)
  }, [navigate, user, task]);
  
  return (
    <>
      <div className='text-center my-5'>
        <button type="button" className="btn btn-success"  onClick={handleAdd} data-bs-toggle="modal" data-bs-target="#exampleModal">+ Add Task</button>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLabel">Add Task</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="mb-3">
              <input type="text" name="title" value={taskDetails.title} onChange={handleInput} className="form-control" id="inputPassword"/>
            </div>
            <div className="">
              <textarea type="text" name="description" value={taskDetails.description} onChange={handleInput} className="form-control" id="inputPassword"/>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
              <button type="button" className="btn btn-primary" style={{backgroundColor: '#3d1364'}} onClick={handleSave}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className='d-sm-flex flex-wrap justify-content-center'>
      {task.data && 
      task.data.data.map((elem, index)=>{
        return <TaskCard key={elem._id} id={elem._id} title={elem.title} description = {elem.description}/>
      })}
    </div>
    </>
  )
}

export default Dashboard
