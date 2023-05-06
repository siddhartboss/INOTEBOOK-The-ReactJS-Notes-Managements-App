import React, { useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const NoteItem = (props) => {
    const contextData = useContext(noteContext);
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text">{note.tag}</p>
                    <button type="button" className="btn btn-info mx-2" onClick={() => {contextData.deleteNote(note._id);props.showAlert("Deleted Successfully","success")}}>Delete</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={() => {updateNote(note)}}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
