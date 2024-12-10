import React from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';

interface DatePickerComponentProps {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({ label, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        slots={{ textField: (props) => <TextField {...props} fullWidth /> }}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
