import React from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface DateTimePickerComponentProps {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const DateTimePickerComponent: React.FC<DateTimePickerComponentProps> = ({ label, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(props) => <TextField {...props} fullWidth />}
      />
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;
