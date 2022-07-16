import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { loggedIn } from "../actions/userAction";

function LoginSignup() {
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLoggedInReducer);
  const {user}= userLogin;
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      dispatch(loggedIn())
    }
    
    if (user) {
      navigate("/dashboard");
    }else{
      navigate("/");
    }
  }, [navigate, user]);


  return (
    <div className='text-center mt-5 '>
      <div style={{fontWeight: '700', fontSize: '3rem'}}>Task Manager</div>
      <br />
      <div className='mt-5'>
        <Link to="/login"><button type="button" className="btn btn-primary mx-2" style={{backgroundColor: '#3d1364'}}>Login</button></Link>
        <Link to="/signup"><button type="button" className="btn btn-primary mx-2" style={{backgroundColor: '#3d1364'}}>SignUp</button></Link>
      </div>
    </div>
  )
}

export default LoginSignup
