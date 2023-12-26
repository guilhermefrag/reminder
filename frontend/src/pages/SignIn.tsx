import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

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

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        
        try {
            const response = await axios.post("signin/", formData);
            
            if (response.status === 200) {
                localStorage.setItem('@token', response.data.token);
                toast.success('Login successful');
                window.location.href = '/home';
            } else {
                toast.error('Login failed');
            }
        } catch (error: any) {
            toast.error(`${error.response.data.error}`);
        }
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
        </form>
        <div className="flex justify-center space-x-5">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-[10em]"
                    onClick={handleSubmit}
                >
                    Login
                </button>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-[10em]"
                    onClick={() => window.location.href = '/signup'}
                >
                    Sign Up
                </button>
            </div>
            <Toaster />
    </div>
);
}
