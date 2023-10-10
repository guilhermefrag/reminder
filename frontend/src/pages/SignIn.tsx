import { useState } from 'react';

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
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
