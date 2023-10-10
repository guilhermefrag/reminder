import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';

export default function SignIn() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div" className="text-center mb-4">
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            type="text"
                            name="username"
                            label="Username"
                            value={formData.username}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            type="password"
                            name="password"
                            label="Password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className="mt-4"
                        >
                            Login
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
