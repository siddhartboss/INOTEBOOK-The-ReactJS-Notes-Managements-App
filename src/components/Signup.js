import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import {useNavigate } from 'react-router-dom'

const Signup = (props) => {

    let history = useNavigate();
    const contextData = useContext(noteContext);
    const [credential, setCredential] = useState({name: "", email: "", password: "", cpassword:""})

    const handleSumbit = (e) => {
        e.preventDefault();
        contextData.addUser(credential.name,credential.email,credential.password);
        localStorage.setItem('token',contextData.generate_uuidv4);
        history('/');
        props.showAlert("Signup Successfully","success")
        // console.log("login");
        // for (let index = 0; index < contextData.usersCred.length; index++) {
        //     const element = contextData.usersCred[index];
        //     if (element.email === credential.email && element.password === credential.password) {
        //         localStorage.setItem('token',contextData.generate_uuidv4);
        //         history('/');
        //     }
        //     else{
        //         // console.log(element.email+"------"+credential.email);
        //         alert("Enter Valid Email And Password");
        //     }
        // } 
    }

    const onChange = (e) => {
        // setCredential({ ...credential, [e.target.name]: e.target.value })
        setCredential({ ...credential, [e.target.name]: e.target.value })
        console.log("hello");
    }

    return (
        <div className='container mt-3'>
            <h2>Signup To INotebook</h2>
            <form className='my-3' onSubmit={handleSumbit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' value={credential.name} onChange={onChange} aria-describedby="emailHelp" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" name='email' value={credential.email} onChange={onChange} aria-describedby="emailHelp" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" value={credential.password} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='cpassword' id="cpassword" value={credential.cpassword} onChange={onChange} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}

export default Signup
