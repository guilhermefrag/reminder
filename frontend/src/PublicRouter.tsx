import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import DontHavePermission from './error/DontHavePermission';

export default function Router() {
    return (
        <Routes>
            <Route path="*" element={<DontHavePermission />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}