import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Forms() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    
                        <TextField
                            label="Size"
                            id="outlined-size-small"
                            defaultValue="Small"
                            size="small"
                        />
                        <TextField
                            label="Size"
                            id="outlined-size-small"
                            defaultValue="Small"
                            size="small"
                        />
                    
                </Box>
            </div>
        </>
    )
}

export default Forms