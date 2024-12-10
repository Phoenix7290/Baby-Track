import React, { useEffect, useState } from 'react';
import { 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  Button, 
  TextField, 
  Grid 
} from '@mui/material';
import DateTimePickerComponent from '../Dates/DateTimePicker';

interface FormSleepProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: SleepData) => void;
  title: string;
  initialData?: SleepData;
}

interface SleepData {
  startTime: Date | null;
  endTime: Date | null;
  description: string;
}

const FormSleep: React.FC<FormSleepProps> = ({
  open,
  onClose,
  onSave,
  title,
  initialData
}) => {
  const [startTime, setStartTime] = useState<Date | null>(
    initialData?.startTime || null
  );
  const [endTime, setEndTime] = useState<Date | null>(
    initialData?.endTime || null
  );
  const [description, setDescription] = useState<string>(
    initialData?.description || ''
  );

  // Reset fields when modal closes
  useEffect(() => {
    if (!open) {
      setStartTime(null);
      setEndTime(null);
      setDescription('');
    }
  }, [open]);

  const handleSave = () => {
    // Validate that start time is before end time
    if (startTime && endTime && startTime > endTime) {
      alert('Horário de início deve ser anterior ao horário de fim');
      return;
    }

    const data: SleepData = {
      startTime,
      endTime,
      description,
    };

    onSave(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <DateTimePickerComponent
              label="Horário de Início do Sono"
              value={startTime}
              onChange={(dateTime) => setStartTime(dateTime)}
            />
          </Grid>
          <Grid item xs={12}>
            <DateTimePickerComponent
              label="Horário de Fim do Sono"
              value={endTime}
              onChange={(dateTime) => setEndTime(dateTime)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição do Sono"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={3}
              placeholder="Detalhes sobre o sono (ex: dormiu profundamente, acordou inquieto)"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormSleep;