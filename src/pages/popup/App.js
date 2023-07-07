import React from 'react'
import { useState,useEffect } from 'react';
import {TextField} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import SendIcon from '@mui/icons-material/Send';
import {Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Comment from '../../components/comments';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Social from '../../components/social';

const App = () => {
  const labels = { tagPerson: 'Tag Person', addNewComment:'Add New' };
  const [comments, setComments] = useState([]);
  const [tagPerson,setTagPerson] = useState(false);
  const [username,setUserName] = useState('Raunit Verma');
  const [key, setKey] = useState(0); // Add a key state

  const saveCommentsToLocalStorage = (index, value) => {
    const updatedComments = [...comments];
    updatedComments[index] = value;
    setComments(updatedComments);
    chrome.storage.local.set({ comments: updatedComments });
  };

  const deleteAllComments = () => {
    chrome.storage.local.set({ comments: [] });
    setComments([]);
    setKey((prevKey) => prevKey + 1); // Increment the key to trigger a rerender
  };

  const deleteOneComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    chrome.storage.local.set({ comments: updatedComments });
    setComments(updatedComments);
    setKey((prevKey) => prevKey + 1); // Increment the key to trigger a rerender
  };

  const addNewComment = () => {
    setComments([...comments, '']);
    setKey((prevKey) => prevKey + 1); // Increment the key to trigger a rerender
  };

  const saveTagPerson = (value) =>{
    chrome.storage.local.set({ tagPerson: value });
    setTagPerson(value);
  }

  const startCommentingOnLinkedIn = () =>{
    chrome.runtime.sendMessage({ action: 'replyToComments' })
  }

  const saveNameToLocalStorage = (value) =>{
    chrome.storage.local.set({ username : value });
  }

  useEffect(() => {
    chrome.storage.local.get(['comments','tagPerson','username'], (result) => {
      if (result.comments && Array.isArray(result.comments)) {
        result.comments.length == 0 ? setComments(['Made by Shypt Solution, Visit CodingKaro.in for more.']) : setComments(result.comments);
      }
      if(!result.comments)setComments(['Made by Shypt Solution, Visit CodingKaro.in for more.']) 
      setTagPerson(result.tagPerson);
      if(result.username && result.username.length>0) setUserName(result.username);
      setKey((prevKey)=>prevKey+1);
    });
  }, []);

  return (
    <div key={key}>
      <div style={{ display: 'flex', alignItems: 'center' ,position: 'fixed', top: 0, left: 0, width: '100%', maxHeight:'2.5rem'}}>
        <Button style={{ marginRight: '10px', marginLeft:'10px' }} variant="outlined"  size="small" onClick={addNewComment} startIcon={<FontAwesomeIcon icon={faCirclePlus} />}>Add</Button>
        <FormControlLabel style={{ marginRight: '10px' }} control={<Checkbox checked={tagPerson} onChange={(e) =>{saveTagPerson(e.target.checked)}} size='small'/>} label={labels.tagPerson} />
        <Button style={{ marginRight: '10px' }} variant="outlined" onClick={deleteAllComments} size="small" startIcon={<DeleteIcon />}>Delete All</Button>
        <TextField
        style={{ marginRight: '10px' }}
        key={-5} // Add a unique key for each item in the map
        label={`Name`}
        id={`name`}
        size="small"
        color="success"
        defaultValue={username}
        margin='normal'
        onChange={(e) => saveNameToLocalStorage(e.target.value)}/>
        <Button onClick={startCommentingOnLinkedIn} variant="contained" endIcon={<SendIcon />} size="small" >Start</Button>
      </div>
      <div style={{ marginTop: '2.5rem', maxHeight: '90vh',position:'relative', overflowY: 'auto',}}>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          index={index}
          comment={comment}
          saveCommentsToLocalStorage={saveCommentsToLocalStorage}
          deleteComment={deleteOneComment}
        />
      ))}
      </div>
      <Social/>
    </div>
  );
};


export default App
