import React, { useEffect, useState } from 'react';
import { 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  Button, 
  TextField, 
  Grid, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  Typography 
} from '@mui/material';
import DateTimePickerComponent from '../Dates/DateTimePicker';

interface FeedingData {
  startTime: Date | null;
  endTime: Date | null;
  feedingType: 'mamadeira' | 'seio';
  quantity?: number;  // for bottle feeding
  breastSide?: 'direito' | 'esquerdo' | 'ambos';  // for breastfeeding
  description: string;
}

interface FormFoodProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: FeedingData) => void;
  title: string;
  initialData?: FeedingData;
}

const FormFood: React.FC<FormFoodProps> = ({
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
  const [feedingType, setFeedingType] = useState<'mamadeira' | 'seio'>(
    initialData?.feedingType || 'mamadeira'
  );
  const [quantity, setQuantity] = useState<number | undefined>(
    initialData?.quantity
  );
  const [breastSide, setBreastSide] = useState<'direito' | 'esquerdo' | 'ambos'>(
    initialData?.breastSide || 'direito'
  );
  const [description, setDescription] = useState<string>(
    initialData?.description || ''
  );

  // Reset fields when modal closes
  useEffect(() => {
    if (!open) {
      setStartTime(null);
      setEndTime(null);
      setFeedingType('mamadeira');
      setQuantity(undefined);
      setBreastSide('direito');
      setDescription('');
    }
  }, [open]);

  const handleSave = () => {
    // Validate that start time is before end time
    if (startTime && endTime && startTime > endTime) {
      alert('Horário de início deve ser anterior ao horário de fim');
      return;
    }

    const data: FeedingData = {
      startTime,
      endTime,
      feedingType,
      ...(feedingType === 'mamadeira' && { quantity }),
      ...(feedingType === 'seio' && { breastSide }),
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
            <FormControl fullWidth>
              <InputLabel>Tipo de Alimentação</InputLabel>
              <Select
                value={feedingType}
                label="Tipo de Alimentação"
                onChange={(e) => setFeedingType(e.target.value as 'mamadeira' | 'seio')}
              >
                <MenuItem value="mamadeira">Mamadeira</MenuItem>
                <MenuItem value="seio">Seio</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <DateTimePickerComponent
              label="Horário de Início da Alimentação"
              value={startTime}
              onChange={(dateTime) => setStartTime(dateTime)}
            />
          </Grid>

          <Grid item xs={12}>
            <DateTimePickerComponent
              label="Horário de Fim da Alimentação"
              value={endTime}
              onChange={(dateTime) => setEndTime(dateTime)}
            />
          </Grid>

          {feedingType === 'mamadeira' && (
            <Grid item xs={12}>
              <TextField
                label="Quantidade (ml)"
                type="number"
                fullWidth
                value={quantity || ''}
                onChange={(e) => setQuantity(Number(e.target.value))}
                InputProps={{
                  inputProps: { 
                    min: 0,
                    step: 10
                  }
                }}
              />
            </Grid>
          )}

          {feedingType === 'seio' && (
            <Grid item xs={12}>
              <Typography variant="subtitle1">Lado do Seio</Typography>
              <RadioGroup
                row
                value={breastSide}
                onChange={(e) => setBreastSide(e.target.value as 'direito' | 'esquerdo' | 'ambos')}
              >
                <FormControlLabel 
                  value="direito" 
                  control={<Radio />} 
                  label="Direito" 
                />
                <FormControlLabel 
                  value="esquerdo" 
                  control={<Radio />} 
                  label="Esquerdo" 
                />
                <FormControlLabel 
                  value="ambos" 
                  control={<Radio />} 
                  label="Ambos" 
                />
              </RadioGroup>
            </Grid>
          )}

          <Grid item xs={12}>
            <TextField
              label="Observações"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={3}
              placeholder="Detalhes sobre a alimentação (ex: bebê parecia satisfeito, engoliu bem)"
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

export default FormFood;