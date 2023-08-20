import React from 'react'
import '../../assets/css/chat.css'
import Grid from "@material-ui/core/Grid"
import { NavLink } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Chatheader = (props) => {

    return (
      <div className="chat-header">
            <Grid container>
                <Grid item xs={1}>
                    <NavLink to="/">
                        <ArrowBackIosNewIcon className='chat-back-arrow' />
                    </NavLink>
                </Grid>
                <Grid item xs={1}>
                    <AccountCircleIcon className='chat-header-avatar' />
                </Grid>
                <Grid item xs={10}>
                    <span className='chat-header-name'>{props.label}</span>
                </Grid>
            </Grid>
      </div>
    );
  };
  
  export default Chatheader;