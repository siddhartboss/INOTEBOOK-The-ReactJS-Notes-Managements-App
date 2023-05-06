import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesSample = [
        {
            "_id":"29116e54-4ba1-4b55-8e79-7f33pbe5c7a4",
            "user":"adb3aa1d-b694-4dc6-845f-e63ed8611a4f",
            "title":"My Note",
            "description":"Sampe description",
            "tag":"personel",
            "date":"2023-29-04 08:30:01",
            "__V": 0
        },
        {
            "_id":"29466epp-4ba1-4b55-8e79-7f339be5c7p4",
            "user":"adb3aa1d-b694-4dc6-845f-e63ed8611a4f",
            "title":"My Note",
            "description":"Sampe description",
            "tag":"personel",
            "date":"2023-29-04 08:30:01",
            "__V": 0
        },
        {
            "_id":"29136e54-4ba1-4p55-8e79-7f339be5c7a4",
            "user":"adb3aa1d-b694-4dc6-845f-e63ed8611a4f",
            "title":"My Note",
            "description":"Sampe description",
            "tag":"personel",
            "date":"2023-29-04 08:30:01",
            "__V": 0
        },
        {
            "_id":"29460054-4bp1-4b55-8e79-7f339be5c7a4",
            "user":"adb3aa1d-b694-4dc6-845f-e63ed8611a4f",
            "title":"My Note",
            "description":"Sampe description",
            "tag":"personel",
            "date":"2023-29-04 08:30:01",
            "__V": 0
        },
        {
            "_id":"29469054-4ba1-4b55-8e79-7f339be5c7p4",
            "user":"adb3aa1d-b694-4dc6-845f-e63ed8611a4f",
            "title":"My Note",
            "description":"Sampe description",
            "tag":"personel",
            "date":"2023-29-04 08:30:01",
            "__V": 0
        },
        {
            "_id":"29466154-4ba1-4b55-8p79-7f339be5c7a4",
            "user":"adb3aa1d-b694-4dc6-845f-e63ed8611a4f",
            "title":"My Note",
            "description":"Sampe description",
            "tag":"personel",
            "date":"2023-29-04 08:30:01",
            "__V": 0
        },
        {
            "_id":"29466enn-4ba1-4b55-8e79-7f3p9be5c7a4",
            "user":"adb3aa1d-b694-4dc6-845f-e63ed8611a4f",
            "title":"My Note",
            "description":"Sampe description",
            "tag":"personel",
            "date":"2023-29-04 08:30:01",
            "__V": 0
        },
        {
            "_id":"29466e54-4ba1-4bnn-8ep9-7f339be5c7a4",
            "user":"adb3aa1d-b694-4dc6-845f-e63ed8611a4f",
            "title":"My Note",
            "description":"Sampe description",
            "tag":"personel",
            "date":"2023-29-04 08:30:01",
            "__V": 0
        },
        {
            "_id":"29466e54-4ba1-4b5b-pe79-7f339be5c7a4",
            "user":"adb3aa1d-b694-4dc6-845f-e63ed8611a4f",
            "title":"My Note",
            "description":"Sampe description",
            "tag":"personel",
            "date":"2023-29-04 08:30:01",
            "__V": 0
        },
        {
            "_id":"29466e54-4ba1-4b5n-8e79-7fpp9be5c7a4",
            "user":"adb3aa1d-b694-4dc6-845f-e63ed8611a4f",
            "title":"My Note",
            "description":"Sampe description",
            "tag":"personel",
            "date":"2023-29-04 08:30:01",
            "__V": 0
        },
    ]

    const usersCred = [
        {
            "name":"john",
            "email":"johndeo111@gmail.com",
            "password":"john@123"
        }
    ]

    const [notes, setNotes] = useState(notesSample)

    const [userCreds, setUserCreds] = useState(usersCred)

    function generate_uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
        function(c) {
           var uuid = Math.random() * 16 | 0, v = c === 'x' ? uuid : (uuid & 0x3 | 0x8);
           return uuid.toString(16);
        });
     }

     //Add User
     const addUser = ({name,email,password}) => {
        console.log("Adding note");
        const user1 = {
            "name":name,
            "email":email,
            "password":password
        };
        setUserCreds(userCreds.concat(user1))
    }

    //Add Note
    const addNote = ({title,description,tag}) => {
        console.log("Adding note");
        console.log(tag);
        const note1 = {
            "_id":generate_uuidv4(),
            "user":generate_uuidv4(),
            "title":title,
            "description":description,
            "tag":tag,
            "date":Date.now().toString(),
            "__V": 0
        };
        setNotes(notes.concat(note1))

    }

    //Delete Note
    const deleteNote = (id) => {
        console.log("Deleting Note With Id "+id);
        const newNotes = notes.filter((note) => {return note._id!==id})
        setNotes(newNotes)
    }

    //Edit Note
    const editNote = (id,title,description,tag) => {
        let newNote = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNote.length; index++) {
            const element = newNote[index];
            if(element._id===id){
                newNote[index].title = title;
                newNote[index].description = description;
                newNote[index].tag = tag;
                break;
            }  
        }
        setNotes(newNote);
    }

    return (
        // <NoteContext.Provider value={{notes , setNotes}}>
        //     {props.children}
        // </NoteContext.Provider>

        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,generate_uuidv4,userCreds,addUser}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;