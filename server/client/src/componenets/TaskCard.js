import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../actions/taskAction';

function TaskCard(props) {
    const {id, title, description} = props;
    const dispatch = useDispatch()
    const refClose = useRef(null);
    const [taskDetails, setTaskDetails] = useState({title:title, description:description})

    const handleDelete =(e)=>{
        e.preventDefault()
        dispatch(deleteTask(id));
    }

    const handleInput=(e)=>{
      setTaskDetails({...taskDetails, [e.target.name]: e.target.value})
    }

    const handleSave=()=>{
      dispatch(editTask(id, taskDetails.title, taskDetails.description))
      refClose.current.click()

    }
  return (
    <div className="card my-5 m-sm-5 shadow" style={{width:'20rem'}}>
        <h5 className="card-header text-light" style={{backgroundColor: '#33075b'}}>
            <div className='mt-2 mb-4' style={{textAlign:'right'}}>
              <a href="" className='me-3' data-bs-toggle="modal" data-bs-target="#exampleModal"><img style={{width: '1.5rem'}} src="images/edit.png" alt="" /></a>
              <a href=""><img style={{width: '1.5rem'}} src="images/delete.png" alt="" onClick={handleDelete}/></a>
            </div>
            <div>{title}</div>
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title text-dark" id="exampleModalLabel">Edit Task</h5>
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
            </div>
        </h5>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
    </div>
  )
}

export default TaskCard
