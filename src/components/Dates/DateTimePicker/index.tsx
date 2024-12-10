import React from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';

interface DateTimePickerComponentProps {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const DateTimePickerComponent: React.FC<DateTimePickerComponentProps> = ({ label, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <DateTimePicker
        label={label}
        value={value}
        onChange={onChange}
        slots={{
          textField: (props) => <TextField {...props} fullWidth />,
        }}
      />
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;
