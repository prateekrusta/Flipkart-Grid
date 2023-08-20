import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message";
import Chatheader from './Chatheader.js';
import '../../assets/css/chat.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const AssistChat = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [messages, setMessages] = React.useState(''); // Initialize as empty
  const [response, setResponse] = React.useState('');
  const [showResponse, setShowResponse] = React.useState(false);

  useEffect(() => {
    if (messages && messages.trim() !== '') {
      // Simulate response after 2 seconds
      const timeoutId = setTimeout(() => {
        setResponse('The latest Rakhi fashion trends combine traditional elegance with contemporary flair. Modern ethnic wear like fusion sarees and jacket-style anarkalis is in vogue, often adorned with intricate embroidery and mirror work. Soft pastel shades like mint green and blush pink dominate, creating a fresh and refined look. Statement accessories such as choker necklaces and oversized earrings add drama, while comfortable yet stylish footwear like juttis and block heels complete the ensemble. Mix-and-match styles, sustainable choices, and minimalist elegance also find their place, allowing for personalized and eco-conscious outfits that celebrate both tradition and innovation.');
        setShowResponse(true);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [messages]);

  const handleDetails = (value) => {
    setMessages(value);
    setShowResponse(false);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="chat-outside">
      <Chatheader label="Help Center" />
      <div className="container">
        <div className="paper" zDepth={2}>
          <div id="style-1" className="messagesBody">
            {messages ? (
              <MessageRight
                message={messages}
                photoURL=""
                displayName="Prateek"
                avatarDisp={true}
              />
            ) : null}
            {showResponse && response ? (
              <MessageLeft
                message={response}
                photoURL=""
                avatarDisp={true}
              />
            ) : null}
          </div>
        </div>
      </div>
      <TextInput change={handleDetails} />
      <Menu
        className="menu-chat"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Copy</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Text To Audio</MenuItem>
        <MenuItem onClick={handleClose}>Report</MenuItem>
      </Menu>
    </div>
  );
}

export default AssistChat;
