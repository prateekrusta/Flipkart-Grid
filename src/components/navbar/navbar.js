import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { MenuItem, Menu, Button } from '@mui/material';
import '../../assets/productNav.css';
const Nav = () => {
    const [cartCount, setCartCount] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const title = ['a', 'b', 'c'];

    const cartHandler = () => {
        // Implement your cart handling logic here
    }

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Implement your logout logic here
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1%', marginLeft: '2%' }}>
            <div className="search-bar" style={{ width: '40%', height:'10%',marginTop: '1%' }}>
                <Autocomplete
                    style={{ borderRadius: "20%" }}
                    id="free-solo-demo"
                    freeSolo
                    options={title}
                    renderInput={(params) => <TextField {...params} label="Search for products..." />}
                />
            </div>
            <div onClick={cartHandler} style={{ display: 'flex', flexDirection: 'row', marginLeft: '35%' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}><ShoppingCartOutlinedIcon /></div>
                <div style={{ display: 'flex', alignItems: 'center' }} className='text-nav'>Cart:</div>
                <div style={{ display: 'flex', alignItems: 'center' }} className='text-nav'>&nbsp;{cartCount}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '3%' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="https://picsum.photos/seed/picsum/35/40" style={{ borderRadius: '50%' }} alt="Profile" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }} className='text-nav'>
                    &nbsp;Hello,&nbsp;Mr. Prateek 
                </div>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <div
                        aria-controls="logout-menu"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        style={{ cursor: 'pointer', marginTop:'10%' }}
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
