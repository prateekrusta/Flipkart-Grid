import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { MenuItem, Menu, Button } from '@mui/material';
import Avatar from '../../assets/logos/avatar.png';
import '../../assets/css/navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const [cartCount, setCartCount] = useState(0);
    const [anchorEl, setAnchorEl] = useState('');
    const title = ['a', 'b', 'c'];
    const history = useNavigate(); 

    const cartHandler = () => {
        
    }

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        history('/');
    };

    return (
        <div className='search-bar' style={{ display: 'flex', flexDirection: 'row', marginTop: '1%' }}>
            <div className="search-bar" style={{ width: '40%', height:'10%',marginTop: '1%' }}>
                <Autocomplete
                    style={{ borderRadius: "20%" }}
                    id="free-solo-demo"
                    freeSolo
                    options={title}
                    renderInput={(params) => <TextField {...params} label="Search for products..." />}
                />
            </div>
            <div onClick={cartHandler} style={{ display: 'flex', flexDirection: 'row',position: 'relative', left:'500px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}><ShoppingCartOutlinedIcon /></div>
                <div style={{ display: 'flex', alignItems: 'center' }} className='text-nav'>Cart:</div>
                <div style={{ display: 'flex', alignItems: 'center' }} className='text-nav'>&nbsp;{cartCount}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row',position: 'relative', left:'550px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginRight:'2px' }}>
                    <img src={Avatar} style={{ borderRadius: '50%', width:'30px' }} alt="Profile" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }} className='text-nav'>
                    &nbsp;Hello,&nbsp;Mr. Prateek 
                </div>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <div
                        aria-controls="logout-menu"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        style={{ cursor: 'pointer', marginTop:'5%' }}
                    >
                        &nbsp;<KeyboardArrowDownOutlinedIcon />
                    </div>
                    <Menu
                        id="logout-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Nav;
