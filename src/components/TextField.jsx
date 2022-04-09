import React from 'react'
import TextField from '@mui/material/TextField';

export default function CustomTextField(props) {
    return (
        <TextField
            // onChange={this.handleChange}
            value={props.value}
            onChange={props.handleChange}
            margin="normal"
            required
            fullWidth
            name={props.name}
            label={props.label}
            id={props.id}
            autoComplete="off"
        />
    )
}
