import React from "react"
import { TextField,IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const Comment = ({index,comment,saveCommentsToLocalStorage,deleteComment}) =>{
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
        key={index} // Add a unique key for each item in the map
        fullWidth
        label={`Comment No: ${index+1}`}
        id={`name-${index.toString()}`}
        size="small"
        margin="normal"
        color="success"
        defaultValue={comment}
        multiline
        onChange={(e) => saveCommentsToLocalStorage(index, e.target.value)}/>
        <IconButton aria-label="delete" size="small" onClick={ ()=>{deleteComment(index) }}> <FontAwesomeIcon icon={faTrashCan} /></IconButton>
        </div>
    )
}

export default Comment;