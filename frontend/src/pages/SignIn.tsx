import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';

type LoginScreenProps = {
    setAuthToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function SignIn({ setAuthToken }: LoginScreenProps) {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    };


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
    <div className="max-w-md mx-auto p-4 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="flex justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Login
                </button>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={() => handleNavigate('/signup')}
                >
                    Sign Up
                </button>
            </div>
        </form>
    </div>
);
}
