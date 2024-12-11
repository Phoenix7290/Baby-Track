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
import { useLanguage } from '../../context/Translation/language';

interface FeedingData {
  startTime: Date | null;
  endTime: Date | null;
  feedingType: 'mamadeira' | 'seio';
  quantity?: number;
  breastSide?: 'direito' | 'esquerdo' | 'ambos';
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

  const { t } = useLanguage();

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
    if (startTime && endTime && startTime > endTime) {
      alert(t('reports.feed.time_error'));
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
              <InputLabel>{t('reports.feed.type')}</InputLabel>
              <Select
                value={feedingType}
                label={t('reports.feed.type')}
                onChange={(e) => setFeedingType(e.target.value as 'mamadeira' | 'seio')}
              >
                <MenuItem value="mamadeira">{t('reports.feed.bottle')}</MenuItem>
                <MenuItem value="seio">{t('reports.feed.breast')}</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <DateTimePickerComponent
              label={t('reports.feed.start')}
              value={startTime}
              onChange={(dateTime) => setStartTime(dateTime)}
            />
          </Grid>

          <Grid item xs={12}>
            <DateTimePickerComponent
              label={t('reports.feed.end')}
              value={endTime}
              onChange={(dateTime) => setEndTime(dateTime)}
            />
          </Grid>

          {feedingType === 'mamadeira' && (
            <Grid item xs={12}>
              <TextField
                label={t('reports.feed.quantity')}
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
              <Typography variant="subtitle1">{t('reports.feed.breast_side')}</Typography>
              <RadioGroup
                row
                value={breastSide}
                onChange={(e) => setBreastSide(e.target.value as 'direito' | 'esquerdo' | 'ambos')}
              >
                <FormControlLabel
                  value="direito"
                  control={<Radio />}
                  label={t('reports.feed.right')}
                />
                <FormControlLabel
                  value="esquerdo"
                  control={<Radio />}
                  label={t('reports.feed.left')}
                />
                <FormControlLabel
                  value="ambos"
                  control={<Radio />}
                  label={t('reports.feed.both')}
                />
              </RadioGroup>
            </Grid>
          )}

          <Grid item xs={12}>
            <TextField
              label={t('reports.description')}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={3}
              placeholder={t('reports.feed.description_placeholder')}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          {t('common.cancel')}
        </Button>
        <Button onClick={handleSave} color="primary">
          {t('common.save')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormFood;