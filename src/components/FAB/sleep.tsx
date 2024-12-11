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
import { useLanguage } from '../../context/Translation/language';

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

  const { t } = useLanguage();

  useEffect(() => {
    if (!open) {
      setStartTime(null);
      setEndTime(null);
      setDescription('');
    }
  }, [open]);

  const handleSave = () => {
    if (startTime && endTime && startTime > endTime) {
      alert(t('reports.sleep.time_error'));
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
              label={t('reports.sleep.start')}
              value={startTime}
              onChange={(dateTime) => setStartTime(dateTime)}
            />
          </Grid>
          <Grid item xs={12}>
            <DateTimePickerComponent
              label={t('reports.sleep.end')}
              value={endTime}
              onChange={(dateTime) => setEndTime(dateTime)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={t('reports.description')}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={3}
              placeholder={t("reports.sleep.description_placeholder")}
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

export default FormSleep;