import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LogoutCard({ open, onClose }: { open: boolean, onClose: () => void }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        onClose();
        navigate('/login');
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Logout Successful</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You have been successfully logged out.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleLogin} color="primary">
                    Login Again
                </Button>
            </DialogActions>
        </Dialog>
    );
}
