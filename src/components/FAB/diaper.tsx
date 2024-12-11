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
import { useLanguage } from '../../context/Translation/language';

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

  const { t } = useLanguage();

  const [diaperStatus, setDiaperStatus] = useState<string>(
    initialData?.diaperStatus || 'limpa'
  );

  const [description, setDescription] = useState<string>(
    initialData?.description || ''
  );

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
          label={t("reports.diaper.time")}
          value={selectedDateTime}
          onChange={setSelectedDateTime}
        />

        <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
          <InputLabel>{t("reports.diaper.status")}</InputLabel>
          <Select
            value={diaperStatus}
            label={t("reports.diaper.status")}
            onChange={handleStatusChange}
          >
            <MenuItem value="limpa">{t("reports.diaper.clean")}</MenuItem>
            <MenuItem value="urina">{t("reports.diaper.wet")}</MenuItem>
            <MenuItem value="fezes">{t("reports.diaper.dirty")}</MenuItem>
            <MenuItem value="ambas">{t("reports.diaper.both")}</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label={t("reports.description")}
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
          {t("common.cancel")}
        </Button>
        <Button onClick={handleSave} color="primary">
          {t("common.save")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDiaper;