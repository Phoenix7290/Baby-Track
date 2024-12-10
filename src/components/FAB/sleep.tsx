import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import DatePickerComponent from '../Dates/DatePicker';
import DateTimePickerComponent from '../Dates/DateTimePicker';

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: unknown) => void;
  title: string;
  content: string;
  onConfirm: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ open, onClose, onSave, title }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  const [textFieldValue, setTextFieldValue] = useState<string>('');

  const handleSave = () => {
    const data = {
      date: selectedDate,
      dateTime: selectedDateTime,
      text: textFieldValue,
    };
    onSave(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DatePickerComponent
          label="Select Date"
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
        <DateTimePickerComponent
          label="Select Date and Time"
          value={selectedDateTime}
          onChange={(dateTime) => setSelectedDateTime(dateTime)}
        />
        <TextField
          label="Text Field"
          value={textFieldValue}
          onChange={(e) => setTextFieldValue(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormModal;