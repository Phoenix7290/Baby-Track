import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  Button, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  SelectChangeEvent 
} from '@mui/material';
import DateTimePickerComponent from '../Dates/DateTimePicker';

interface FormDiaperProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: DiaperData) => void;
  title: string;
  initialData?: DiaperData;
}

interface DiaperData {
  dateTime: Date | null;
  diaperStatus: string;
  description: string;
}

const FormDiaper: React.FC<FormDiaperProps> = ({
  open,
  onClose,
  onSave,
  title,
  initialData
}) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(
    initialData?.dateTime ? new Date(initialData.dateTime) : new Date()
  );

  const [diaperStatus, setDiaperStatus] = useState<string>(
    initialData?.diaperStatus || 'limpa'
  );

  const [description, setDescription] = useState<string>(
    initialData?.description || ''
  );

  // Reset fields when modal closes
  useEffect(() => {
    if (!open) {
      setSelectedDateTime(new Date());
      setDiaperStatus('limpa');
      setDescription('');
    }
  }, [open]);

  const handleSave = () => {
    const data: DiaperData = {
      dateTime: selectedDateTime,
      diaperStatus,
      description
    };

    onSave(data);
    onClose();
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setDiaperStatus(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DateTimePickerComponent
          label="Horário da Troca"
          dateTime={selectedDateTime}
          setDateTime={setSelectedDateTime}
        />

        <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
          <InputLabel>Status da Fralda</InputLabel>
          <Select
            value={diaperStatus}
            label="Status da Fralda"
            onChange={handleStatusChange}
          >
            <MenuItem value="limpa">Limpa</MenuItem>
            <MenuItem value="urina">Suja de Urina</MenuItem>
            <MenuItem value="fezes">Suja de Fezes</MenuItem>
            <MenuItem value="ambas">Suja de Ambas</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Observações"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDiaper;