import Swal from 'sweetalert2'
import { Button } from '@mui/material';
import { useLanguage } from '../../../context/Translation/language';

const Alert = () => {
    const { t } = useLanguage();

    const showAlert = () => {
        Swal.fire({
            title: t('alert_title'),
            text: t('alert_text'),
            icon: 'success',
            confirmButtonText: 'Cool'
        });
    }

    return (
        <Button onClick={showAlert}>{t("button_alert")}</Button>
    )
}

export default Alert;