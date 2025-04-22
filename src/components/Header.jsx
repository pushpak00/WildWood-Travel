import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div class="flex sticky place-content-between mx-6 my-4">
                <div>
                    <img class='w-28' src="logo/wildwood-travel-logo.png" />
                </div>
                <div class="my-5 md:hidden">
                    
                        <span
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </span>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Home</MenuItem>
                            <MenuItem onClick={handleClose}>About</MenuItem>
                            <MenuItem onClick={handleClose}>Services</MenuItem>
                            <MenuItem onClick={handleClose}>Tours</MenuItem>
                            <MenuItem onClick={handleClose}>Blog</MenuItem>
                            <MenuItem onClick={handleClose}>Contact us</MenuItem>
                        </Menu>
                    
                </div>
                <div class="my-7 flex hidden md:block space-x-2">
                    <input class="h-5 w-24 px-1 border border-amber-500 hover:border rounded-sm" type="text" placeholder="Search" />
                    <span class="cursor-pointer hover:underline">Home</span>
                    <span class="cursor-pointer hover:underline">About</span>
                    <span class="cursor-pointer hover:underline">Services</span>
                    <span class="cursor-pointer hover:underline">Tours</span>
                    <span class="cursor-pointer hover:underline">Blog</span>
                    <span class="cursor-pointer hover:underline">Contact us</span>
                </div>

            </div>
        </>
    )
}
export default Header