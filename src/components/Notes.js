import React, { useContext, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';

const Notes = (props) => {
    const contextData = useContext(noteContext);
    // const {notes, setNotes} = contextData;    -- For taking values from context dont use [] 

    const updateNote = (note) => {
        ref.current.click();
        setNotes({id : note._id, etitle:note.title, edescription:note.description, etag:note.tag })
    }
    const ref = useRef(null)

    const refClose = useRef(null)
    
    const [note, setNotes] = useState({ id:"", etitle: "", edescription: "", etag: "" })

    const handleClick = (e) => {
        refClose.current.click();
        contextData.editNote(note.id,note.etitle,note.edescription,note.etag)
        console.log("Updating Notes.....",note)
        props.showAlert("Updated Successfully","success")
        // e.preventDefault();
        // contextData.addNote(note);

    }

    const onChange = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" value={note.etitle} name='etitle' aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" name='edescription' value={note.edescription} id="edescription" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-check-label" htmlFor="tag">Tag</label>
                                    <input type="text" className="form-control" id="etag" value={note.etag} name='etag' onChange={onChange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5} className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="row my-3">
                    <h2>Your Notes</h2>
                    {/* {console.log(contextData)} */}
                    {contextData.notes.length===0 && "No Notes To Display"}
                    {contextData.notes.map((note) => {
                        return <NoteItem note={note} showAlert={props.showAlert} updateNote={updateNote} />
                        // return note.title; 
                    })}
                </div>
            </div>
        </>
    )
}

export default Notes
