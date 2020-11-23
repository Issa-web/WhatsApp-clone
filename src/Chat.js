import React from 'react';
import { Avatar,IconButton } from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useEffect, useState } from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from "react-router-dom";
import './Chat.css'
import db from './firebase';
function Chat() {
  
  const [input, setInput] = useState('Issa');
  const [seed, setSeed] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() =>{
    if(roomId){
      db.collection('rooms').doc(roomId).
      onSnapshot(snapshot =>(
        setRoomName(snapshot.data().name)
      ))
    }
}, [roomId])

    useEffect(() =>{
        setSeed(Math.random() * 5000)
    }, [roomId])

    const sendMessage = (e) =>{
      e.preventDefault()
      console.log("You typed:", input)
      setInput("")
    }


  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3> {roomName} </h3>
          <p> Last seen at...</p>
        </div>

        <div className="chat__headerRight">
             <IconButton>
                <SearchOutlined />
             </IconButton>
             <IconButton>
                <AttachFileIcon />
             </IconButton>
             <IconButton>
                <MoreVertIcon />
             </IconButton>

        </div>

      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && `chat__receiver`}`} > 
        <span className="chat__name"> Issa</span>
        Hey Guys
        <span className="chat__timestamp"> 3:52pm </span>
        </p>

      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)}
          type="text" placeholder="type a message"/>
          <button onClick={sendMessage} type="Submit">Send a message</button>
        </form>
        <MicIcon />
      </div>

    </div>
  );
}

export default Chat;
