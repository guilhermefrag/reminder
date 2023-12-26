// Inside DeleteReminderCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Button, Modal } from '@mui/material';

interface DeleteReminderCardProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const DeleteReminderCard: React.FC<DeleteReminderCardProps> = ({ open, onClose, onDelete }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Card style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: 400 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Confirm Deletion
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Are you sure you want to delete this note?
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={onDelete} style={{ marginRight: '10px', backgroundColor: 'red' }}>
                        Delete
                    </Button>
                    <Button variant="contained" onClick={onClose}>
                        Cancel
                    </Button>
                </CardContent>
            </Card>
        </Modal>
    );
};
