import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import {useNavigate } from 'react-router-dom'

const Login = (props) => {
    let history = useNavigate();
    const contextData = useContext(noteContext);
    const [credential, setCredential] = useState({email: "", password: ""})

    const handleSumbit = (e) => {
        e.preventDefault();
        // console.log("login");
        for (let index = 0; index < contextData.userCreds.length; index++) {
            const element = contextData.userCreds[index];
            if (element.email === credential.email && element.password === credential.password) {
                localStorage.setItem('token',contextData.generate_uuidv4);
                history('/');
                props.showAlert("Login Successfully","success")
            }
            else{
                // console.log(element.email+"------"+credential.email);
                // alert("Enter Valid Email And Password");
                props.showAlert("Invaid Credential","danger")
            }
        } 
    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    return (
        <div className='container mt-3'>
            <h2>Login To INotebook</h2>
            <form className='my-3' onSubmit={handleSumbit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" value={credential.email} onChange={onChange} name='email' aria-describedby="emailHelp" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' onChange={onChange} value={credential.password} id="password" minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login
